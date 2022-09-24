.PHONY: build
build: $(wildcard src/*)
	rm -Rf build
	mkdir -p build/
	cd src/ && zip -r ../build/top-bar-ultrawide@com.ftpix.zip .

.PHONY: clean
clean:
	rm -rf build/

.PHONY: install
install:
	$(MAKE) build
	gnome-extensions install ./build/top-bar-ultrawide@com.ftpix.zip