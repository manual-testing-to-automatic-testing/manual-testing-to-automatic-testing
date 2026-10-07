.PHONY: check github-pages

# Check the repository and the website. See bin/check.
check:
	bin/check

# Publish the website. See spec/monorepo-github-pages/.
github-pages:
	bin/make-github-pages
