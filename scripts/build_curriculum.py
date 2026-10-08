#!/usr/bin/env python3
"""Build curriculum.md from spec/index.md, so the curriculum has one place to
read and can never disagree with the spec.

It copies the spec's learning outcomes, schedule, module depths, core
modules, track modules, and gates, and links each module to its materials.

Usage:
    python3 scripts/build_curriculum.py           # write curriculum.md
    python3 scripts/build_curriculum.py --check   # exit 1 if curriculum.md is stale
"""

import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
SPEC = ROOT / "spec" / "index.md"
OUT = ROOT / "curriculum.md"

# The spec's sections to copy, by their "###" heading, and the heading to use here.
SECTIONS = [
    ("Programme learning outcomes", "Learning outcomes"),
    ("Schedule and time", "Schedule"),
    ("Module depth by track", "Module depth by track"),
    ("Core modules", "Core modules"),
    ("Track modules", "Track modules"),
    ("Gates", "Gates"),
]

# Track module materials, by the module's name in the spec.
TRACK_MODULE_FOLDERS = {
    "Role foundations": "role-foundations",
    "Health care foundations": "health-care-foundations",
    "Coaching others in automation": "coaching-others-in-automation",
    "Automation strategy and metrics": "automation-strategy-and-metrics",
    "Frameworks and non-functional testing": "frameworks-and-non-functional-testing",
    "Acceptance test automation": "acceptance-test-automation",
    "Leading teams through automation adoption": "leading-automation-adoption",
}

INTRO = """# Curriculum

The curriculum of the training programme from manual testing to automatic testing, in one place: what every person learns, in which hours, to what depth for each track, with what evidence, and how it is assessed.

This page is generated from [spec/index.md](spec/index.md), the single source of truth, by `scripts/build_curriculum.py`. Edit the spec, never this page. The materials for each module are linked from its section.

- **Length:** 280 hours of protected learning time, by default 7.5 hours a week (20% of a 37.5-hour week), so about 38 weeks.
- **Starts with:** the basics, in hours 0 to 60: Module 0 Basics of a programming language, Module 1 Basics of a browser automator, and Module 2 Basics of an AI assistant, each ending with a walkthrough to the mentor.
- **Core modules:** Module 0 to Module 14, the same for every track, taught at each track's depth.
- **Track modules:** Role foundations and Health care foundations for every track, and leadership modules for Band 6 and Band 7.
- **Tracks:** eight, one for each band and UK GDaD PCF role, from Band 3 to Band 7. See the [track guides](materials/tracks/index.md).
- **Gates:** at hours 60, 105, 150, 187.5, and 240, then a follow-up about six months later, each with the full capability self-assessment.
- **Ends with:** the Lean Six Sigma Green Belt, a lifetime certification, in hours 240 to 280.
"""


def module_folders():
    """Module number -> its materials folder, such as 4 -> module-7-browser-automation-fundamentals."""
    folders = {}
    for path in (ROOT / "materials" / "modules").glob("module-*"):
        number = int(path.name.split("-")[1])
        folders[number] = path.name
    return folders


def sections(text):
    """Split the spec into its '###' sections: heading -> body lines."""
    found, name, body = {}, None, []
    for line in text.splitlines():
        if line.startswith("### ") or line.startswith("## "):
            if name is not None:
                found[name] = body
            name, body = (line[4:].strip() if line.startswith("### ") else None), []
        elif name is not None:
            body.append(line)
    if name is not None:
        found[name] = body
    return found


def relink(line):
    """Rewrite the spec's relative links for a page at the monorepo root."""

    def fix(match):
        label, href = match.group(1), match.group(2)
        if re.match(r"^[a-z][a-z0-9+.-]*:", href):
            return match.group(0)
        if href.startswith("#"):
            return f"[{label}](spec/index.md{href})"
        if href.startswith("../"):
            return f"[{label}]({href[3:]})"
        return f"[{label}](spec/{href})"

    return re.sub(r"\[([^\]]+)\]\(([^)]+)\)", fix, line)


def materials_link(heading, folders):
    """The materials line for a module heading, or None."""
    match = re.match(r"Module (\d+) ", heading)
    if match and int(match.group(1)) in folders:
        folder = folders[int(match.group(1))]
        line = f"- **Materials:** [materials/modules/{folder}/](materials/modules/{folder}/index.md)"
        if (ROOT / "materials" / "modules" / folder / "training.md").exists():
            line += f"; the training content, lesson by lesson: [training](materials/modules/{folder}/training.md)"
        return line
    for name, folder in TRACK_MODULE_FOLDERS.items():
        if heading.startswith(name):
            return f"- **Materials:** [materials/tracks/{folder}/](materials/tracks/{folder}/index.md)"
    return None


def build():
    spec = sections(SPEC.read_text(encoding="utf-8"))
    folders = module_folders()
    out = [INTRO]
    for source, heading in SECTIONS:
        if source not in spec:
            sys.exit(f"error: spec/index.md has no section '### {source}'")
        out.append(f"## {heading}\n")
        body = spec[source]
        lines = []
        pending = None
        for line in body:
            if line.startswith("#### "):
                if pending:
                    lines.extend([pending, ""])
                    pending = None
                title = line[5:].strip()
                lines.append("### " + title)
                pending = materials_link(title, folders)
                continue
            if line.startswith("##### "):
                line = "#### " + line[6:]
            lines.append(relink(line))
        if pending:
            while lines and not lines[-1].strip():
                lines.pop()
            lines.extend(["", pending, ""])
        text = "\n".join(lines).strip("\n")
        # Put each module's materials line straight after its bullets.
        out.append(text + "\n")
    return "\n".join(out).rstrip("\n") + "\n"


def tidy(text):
    """Place each pending materials line before the blank line ahead of the next heading."""
    text = re.sub(r"\n\n(- \*\*Materials:\*\* [^\n]+)\n\n", r"\n\1\n\n", text)
    return re.sub(r"\n{3,}", "\n\n", text)


def main():
    text = tidy(build())
    if "--check" in sys.argv[1:]:
        if not OUT.exists() or OUT.read_text(encoding="utf-8") != text:
            print("curriculum.md is stale; run scripts/build_curriculum.py", file=sys.stderr)
            sys.exit(1)
        return
    OUT.write_text(text, encoding="utf-8")
    print(f"wrote {OUT.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
