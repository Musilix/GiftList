.PHONY: build-RuntimeDependenciesLayer build-lambda-common
.PHONY: build-helloWorldFunction build-testLoginFunction

# Specify the build directions for lambda resources
build-helloWorldFunction:
	$(MAKE) HANDLER=src/handlers/helloworld.ts build-lambda-common
build-testLoginFunction:
	$(MAKE) HANDLER=src/handlers/testlogin.ts build-lambda-common
	
build-lambda-common:
	npm install
	rm -rf dist
	echo "{\"extends\": \"./tsconfig.json\", \"include\": [\"${HANDLER}\"] }" > tsconfig-only-handler.json
	npm run build -- --build tsconfig-only-handler.json
	cp -r dist "$(ARTIFACTS_DIR)/handlers"

build-RuntimeDependenciesLayer:
	mkdir -p "$(ARTIFACTS_DIR)/nodejs"
	cp package.json package-lock.json "$(ARTIFACTS_DIR)/nodejs/"
	npm install --production --prefix "$(ARTIFACTS_DIR)/nodejs/"
	rm "$(ARTIFACTS_DIR)/nodejs/package.json" # to avoid rebuilding when changes doesn't relate to dependencies