PROJECT_DIR=happy-birthday
BUILD=build
DIST=docs

build:
	rm -rf $(DIST)
	cd $(PROJECT_DIR) && npm run build && cp -rf $(BUILD) ../$(DIST)
