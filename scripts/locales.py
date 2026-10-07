#!/usr/bin/env python3
"""Place, relink, copy, and check translated documents in locales/<code>/.

See spec/locales/index.md. English documents are the monorepo's own Markdown
files. Each other locale's version of a document is a directory in
locales/<code>/ holding index.md, a README.md symlink, and a .locale-peer-id.

A translation keeps the English document's links, in the same order. Links are
then recomputed from the English source: a link to a document with a
translation in this locale goes to that translation, mapping heading anchors
by position; any other link goes to the English file.

Usage:
    python3 scripts/locales.py place <code> <english-path> <dir> <translation.md>
    python3 scripts/locales.py relink <code>
    python3 scripts/locales.py copy <from-code> <to-code>
    python3 scripts/locales.py check
    python3 scripts/locales.py missing <code>
"""

import hashlib
import os
import posixpath
import re
import shutil
import sys

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
LOCALES = os.path.join(ROOT, "locales")
CODE = re.compile(r"^[a-z]{2,3}-([a-z]{2}|\d{3})$")
LINK = re.compile(r"(?<!!)\[((?:[^\]\\]|\\.)*)\]\(([^)\s]+)\)")
HEADING = re.compile(r"^(#{1,6})\s+(.+?)\s*$", re.MULTILINE)
FENCE = re.compile(r"^```.*?^```", re.MULTILINE | re.DOTALL)

# Directories never published, matching manual-testing-to-automatic-testing.github.io/bin/sync.
SKIP = {"node_modules", "locales", "manual-testing-to-automatic-testing.github.io", ".git"}


def peer_id(english_path):
    """The .locale-peer-id for a document: the same in every locale's copy."""
    return hashlib.md5(f"doc:{english_path}".encode("utf-8")).hexdigest()


def english_documents():
    """The English documents that have translations, matching bin/sync."""
    docs = [p for p in ("README.md", "plan.md", "tasks.md") if os.path.isfile(os.path.join(ROOT, p))]
    for top in ("spec", "materials", "instruments"):
        for base, dirs, files in os.walk(os.path.join(ROOT, top)):
            dirs[:] = sorted(d for d in dirs if d not in SKIP)
            for f in sorted(files):
                path = os.path.join(base, f)
                if f.endswith(".md") and not os.path.islink(path):
                    docs.append(os.path.relpath(path, ROOT))
    for p in ("practice-repo/README.md", "practice-repo/CONTRIBUTING.md", "practice-repo/fhir-sandbox/README.md"):
        if os.path.isfile(os.path.join(ROOT, p)):
            docs.append(p)
    for top in ("practice-repo/spec", "practice-repo/tests"):
        for base, dirs, files in os.walk(os.path.join(ROOT, top)):
            dirs[:] = sorted(d for d in dirs if d not in SKIP)
            for f in sorted(files):
                if f.endswith(".md"):
                    docs.append(os.path.relpath(os.path.join(base, f), ROOT))
    return sorted(set(docs))


def peers():
    """peer id -> English path."""
    return {peer_id(p): p for p in english_documents()}


def locale_map(code):
    """English path -> translated directory (relative to locales/<code>/, '' for the root)."""
    base = os.path.join(LOCALES, code)
    by_peer = peers()
    result = {}
    for d, _, files in os.walk(base):
        if ".locale-peer-id" in files:
            with open(os.path.join(d, ".locale-peer-id"), encoding="utf-8") as f:
                pid = f.read().strip()
            if pid in by_peer:
                rel = os.path.relpath(d, base)
                result[by_peer[pid]] = "" if rel == "." else rel
    return result


def strip_code(text):
    return FENCE.sub("", text)


def links_of(text):
    return [m for m in LINK.finditer(strip_code(text))]


def github_slug(text):
    """GitHub's heading anchor, as the website's githubSlug() makes it: lower case,
    anything but letters, digits, spaces, hyphens, and underscores dropped, then
    each space a hyphen."""
    text = re.sub(r"<[^>]+>", "", text).lower().strip()
    text = re.sub(r"[^\w\s-]", "", text)
    return re.sub(r"\s", "-", text)


def anchors_of(text):
    """Heading anchors in order, as GitHub (and the website) make them."""
    seen = {}
    out = []
    for m in HEADING.finditer(strip_code(text)):
        heading = re.sub(r"\[([^\]]+)\]\([^)]+\)", r"\1", m.group(2))
        heading = re.sub(r"[`*]", "", heading)
        base = github_slug(heading)
        n = seen.get(base, 0)
        seen[base] = n + 1
        out.append(f"{base}-{n}" if n else base)
    return out


def read(path):
    with open(path, encoding="utf-8") as f:
        return f.read()


def write_doc(directory, text, english_path):
    os.makedirs(directory, exist_ok=True)
    with open(os.path.join(directory, "index.md"), "w", encoding="utf-8", newline="\n") as f:
        f.write(text.rstrip() + "\n")
    with open(os.path.join(directory, ".locale-peer-id"), "w", encoding="utf-8") as f:
        f.write(peer_id(english_path) + "\n")
    readme = os.path.join(directory, "README.md")
    if os.path.islink(readme) or os.path.exists(readme):
        os.remove(readme)
    os.symlink("index.md", readme)


def resolve(english_path, href):
    """Resolve a relative href in an English document to (repo path, anchor)."""
    target, _, anchor = href.partition("#")
    joined = posixpath.normpath(posixpath.join(posixpath.dirname(english_path), target)) if target else english_path
    return joined.rstrip("/"), anchor, target.endswith("/")


def english_doc_for(path):
    """The English document a resolved path names, if any."""
    for candidate in (path, f"{path}/index.md", f"{path}/README.md"):
        if os.path.isfile(os.path.join(ROOT, candidate)) and candidate.endswith(".md"):
            return candidate
    return None


def relink_text(code, english_path, text, mapping):
    """Recompute every relative link in a translation from its English source."""
    english = read(os.path.join(ROOT, english_path))
    e_links = links_of(english)
    t_links = links_of(text)
    if len(e_links) != len(t_links):
        raise SystemExit(
            f"locales: {code}: {english_path}: the translation has {len(t_links)} links, "
            f"the English has {len(e_links)}; keep the same links in the same order"
        )
    here = os.path.join("locales", code, mapping[english_path]) if english_path in mapping else None
    if here is None:
        raise SystemExit(f"locales: {code}: {english_path} is not placed")
    new_hrefs = []
    for e in e_links:
        href = e.group(2)
        if re.match(r"^[a-z][a-z0-9+.-]*:", href, re.I) or href.startswith("//"):
            new_hrefs.append(href)
            continue
        if href.startswith("#"):
            new_hrefs.append(map_anchor(code, english_path, href[1:], mapping, same=True))
            continue
        path, anchor, slash = resolve(english_path, href)
        doc = english_doc_for(path)
        if doc and doc in mapping:
            target_dir = os.path.join("locales", code, mapping[doc])
            rel = os.path.relpath(target_dir, here).replace(os.sep, "/")
            rel = "./" if rel == "." else rel + "/"
            new_hrefs.append(rel + (map_anchor(code, doc, anchor, mapping) if anchor else ""))
        else:
            rel = os.path.relpath(os.path.join(ROOT, path), os.path.join(ROOT, here)).replace(os.sep, "/")
            new_hrefs.append(rel + ("/" if slash else "") + (f"#{anchor}" if anchor else ""))
    # Replace hrefs in the translation, in order, outside code fences.
    out = []
    parts = re.split(r"(^```.*?^```)", text, flags=re.MULTILINE | re.DOTALL)
    i = 0
    for part in parts:
        if part.startswith("```"):
            out.append(part)
            continue

        def sub(m):
            nonlocal i
            href = new_hrefs[i]
            i += 1
            return f"[{m.group(1)}]({href})"

        out.append(LINK.sub(sub, part))
    return "".join(out)


def map_anchor(code, english_doc, anchor, mapping, same=False):
    """Map an English heading anchor to the translated document's anchor at the same position."""
    english_anchors = anchors_of(read(os.path.join(ROOT, english_doc)))
    if english_doc not in mapping or anchor not in english_anchors:
        return f"#{anchor}"
    translated = read(os.path.join(LOCALES, code, mapping[english_doc], "index.md"))
    t_anchors = anchors_of(translated)
    if len(t_anchors) != len(english_anchors):
        return f"#{anchor}"
    return f"#{t_anchors[english_anchors.index(anchor)]}"


def cmd_place(code, english_path, directory, translation_file):
    if not CODE.match(code):
        raise SystemExit(f"locales: not a <language>-<region> code: {code}")
    if english_path not in english_documents():
        raise SystemExit(f"locales: not an English document: {english_path}")
    directory = "" if directory in ("", ".", "/") else directory.strip("/")
    if (directory == "") != (english_path == "README.md"):
        raise SystemExit("locales: only README.md is placed at the locale root")
    text = read(translation_file)
    e_count = len(links_of(read(os.path.join(ROOT, english_path))))
    if len(links_of(text)) != e_count:
        raise SystemExit(
            f"locales: {code}: {english_path}: the translation has {len(links_of(text))} links, "
            f"the English has {e_count}; keep the same links in the same order"
        )
    write_doc(os.path.join(LOCALES, code, directory), text, english_path)
    cmd_relink(code)
    print(f"locales: {code}: {english_path} -> locales/{code}/{directory + '/' if directory else ''}index.md")


def cmd_relink(code):
    mapping = locale_map(code)
    for english_path, directory in sorted(mapping.items()):
        path = os.path.join(LOCALES, code, directory, "index.md")
        text = read(path)
        new = relink_text(code, english_path, text, mapping)
        if new != text:
            with open(path, "w", encoding="utf-8", newline="\n") as f:
                f.write(new)


def cmd_copy(source, target):
    if not CODE.match(target):
        raise SystemExit(f"locales: not a <language>-<region> code: {target}")
    src = os.path.join(LOCALES, source)
    dst = os.path.join(LOCALES, target)
    if os.path.exists(dst):
        shutil.rmtree(dst)
    shutil.copytree(src, dst, symlinks=True)
    cmd_relink(target)
    print(f"locales: copied {source} -> {target}")


def cmd_missing(code):
    mapping = locale_map(code)
    missing = [p for p in english_documents() if p not in mapping]
    for p in missing:
        print(p)
    return missing


def cmd_check():
    problems = []
    if not os.path.isdir(LOCALES):
        print("locales: no locales/ directory")
        return 0
    by_peer = peers()
    for code in sorted(os.listdir(LOCALES)):
        base = os.path.join(LOCALES, code)
        if not os.path.isdir(base):
            continue
        if not CODE.match(code):
            problems.append(f"{code}: not a <language>-<region> directory name")
            continue
        mapping = locale_map(code)
        for d, dirs, files in os.walk(base):
            rel = os.path.relpath(d, base)
            if "index.md" not in files:
                if rel != "." and not dirs:
                    problems.append(f"{code}/{rel}: no index.md")
                continue
            readme = os.path.join(d, "README.md")
            if not (os.path.islink(readme) and os.readlink(readme) == "index.md"):
                problems.append(f"{code}/{rel}: README.md is not a symlink to index.md")
            pid_file = os.path.join(d, ".locale-peer-id")
            if not os.path.isfile(pid_file):
                problems.append(f"{code}/{rel}: no .locale-peer-id")
                continue
            pid = read(pid_file)
            if not re.fullmatch(r"[0-9a-f]{32}\n", pid):
                problems.append(f"{code}/{rel}: .locale-peer-id is not 32 lowercase hex digits and a newline")
            elif pid.strip() not in by_peer:
                problems.append(f"{code}/{rel}: .locale-peer-id matches no English document")
            text = read(os.path.join(d, "index.md"))
            for m in links_of(text):
                href = m.group(2)
                if re.match(r"^[a-z][a-z0-9+.-]*:", href, re.I) or href.startswith(("#", "//")):
                    continue
                target = href.split("#")[0]
                if not os.path.exists(os.path.normpath(os.path.join(d, target))):
                    problems.append(f"{code}/{rel}: broken link {href}")
            english = by_peer.get(pid.strip())
            if english:
                e_count = len(links_of(read(os.path.join(ROOT, english))))
                if e_count != len(links_of(text)):
                    problems.append(f"{code}/{rel}: {len(links_of(text))} links, English {english} has {e_count}")
        missing = [p for p in english_documents() if p not in mapping]
        print(f"locales: {code}: {len(mapping)} documents translated, {len(missing)} missing")
    for p in problems:
        print(f"locales: {p}")
    return 1 if problems else 0


def main(argv):
    if len(argv) < 2:
        print(__doc__)
        return 2
    cmd, args = argv[1], argv[2:]
    if cmd == "place" and len(args) == 4:
        cmd_place(*args)
    elif cmd == "relink" and len(args) == 1:
        cmd_relink(*args)
    elif cmd == "copy" and len(args) == 2:
        cmd_copy(*args)
    elif cmd == "missing" and len(args) == 1:
        cmd_missing(*args)
    elif cmd == "check" and not args:
        return cmd_check()
    else:
        print(__doc__)
        return 2
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
