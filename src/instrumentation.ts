// Fix for environments that inject a broken localStorage into Node.js global scope
// (e.g., Google IDX with --localstorage-file flag)
if (typeof globalThis.localStorage !== 'undefined') {
    const origGetItem = globalThis.localStorage.getItem;
    if (typeof origGetItem !== 'function') {
        // The environment injected a localStorage object without proper methods
        // Patch it with no-op implementations
        globalThis.localStorage = {
            getItem: () => null,
            setItem: () => { },
            removeItem: () => { },
            clear: () => { },
            key: () => null,
            length: 0,
        } as Storage;
    }
}

export async function register() {
    // instrumentation hook
}
