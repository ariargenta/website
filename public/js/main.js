console.log("Loading WASM module...");
const wasmModule = fetch('./wasm/test.wasm')
    .then(response => {
        console.log("WASM module loaded successfully!", response);
        return response.arrayBuffer();
    })
    .then(bytes => {
        console.log("Bytes converted to ArrayBuffer");
        return WebAssembly.instantiate(bytes, {});
    })
    .then(results => {
        console.log("WebAssembly instantiated successfully!");
        const add = results.instance.exports.add;
        console.log("Result of add(1, 2):", add(1, 2));
    })
    .catch(error => {
        console.error("Error loading WASM module:", error);
    })