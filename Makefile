LINT_SRC = spec/retab-spec.js index.js

test: $(LINT_SRC)
	@node node_modules/.bin/jshint $^
	@node node_modules/.bin/istanbul test node_modules/.bin/_mocha \
		-R spec -- \
		--require should \
		--recursive \
		--reporter spec

.PHONY: test
