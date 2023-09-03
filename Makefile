PROJECT_DIR=happy-birthday
BUILD=build
DIST=docs
NOW=$(shell date +%Y-%m-%d-%H-%M-%S)

build:
	rm -rf $(DIST)
	cd $(PROJECT_DIR) && npm run build && cp -rf $(BUILD) ../$(DIST)

deploy:build
	git add . && git commit -m "更新:$(NOW)" && git push origin main

dev:
	cd $(PROJECT_DIR) && npm run start
