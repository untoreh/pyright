/// <reference path="fourslash.ts" />

// @filename: test1.py
//// Test[|/*marker*/|]

// @filename: testLib/__init__.pyi
// @library: true
//// class Test:
////     pass

// @ts-ignore
await helper.verifyCompletion('included', { marker: { completions: [] } });
