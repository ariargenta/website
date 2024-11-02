#!/bin/bash
emcc src/main.cpp -o public/wasm/main.js -s WASM=1 -s "EXPORTED_FUNCTIONS=['_main']" -s "EXTRA_EXPORTED_RUNTIME_METHODS=['cwrap', 'ccall']"