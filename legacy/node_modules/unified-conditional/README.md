# unified-conditional

> Apply [unified](https://unifiedjs.com/) plugins conditionally

## Usage

```js
import { remark } from 'remark'
import { VFile } from 'vfile'
import { unifiedConditional } from 'unified-conditional'

let options = [
  // Pattern to match
  /example\.md$/,
  // Plugins to run if pattern matches
  [/* ... */],
  // Plugins to run if pattern does not match
  [/* ... */],
]

await remark()
  .use(unifiedConditional, options)
  .process(new VFile({ path: '/example.md', value: '# Hello world' }))
```

The pattern can be one of three types:

- `string`: String value to match the filename against exactly
- `RegExp`: Regular expression to test the filename against
- `function`: Custom match function which receives the [transformer](https://github.com/unifiedjs/unified#function-transformertree-file-next) arguments and returns a boolean value
