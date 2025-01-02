# Closure Compiler with FlatBuffers Example

## Setup and Build

1. Install dependencies:
```bash
npm i
```

2. Generate FlatBuffer files:
```bash
npm run generate
```

3. Build the project:
```bash
npm run build
```

The compiled output will be in `dist/bundle.js`

## Notes
- The `createString` function is added to externs for easy reference
- To fix ByteBuffer issues, uncomment the commented externs in `flatbuffers.externs.js` and rebuild

Enjoy!
