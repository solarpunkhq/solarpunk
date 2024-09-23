# remark-rehype-wrap

> Wrap `remark` or `rehype` subtrees in a new container node.

## Installation

```
npm install remark-rehype-wrap
```

```js
import { remark } from 'remark'
import { remarkRehypeWrap } from 'remark-rehype-wrap'

await remark().use(remarkRehypeWrap).process('<p>Hello, world!</p>')
```

## Usage

See [`test.js`](https://github.com/bradlc/remark-rehype-wrap/blob/main/test.js) for usage examples.

## Options

### `options.node`

A new node to use as the wrapper. e.g. `{ type: 'element', tagName: 'div' }`

### `options.start`

Either:

- `string`: A node selector passed to [`unist-util-select`](https://github.com/syntax-tree/unist-util-select). Nodes matching the selector create a new wrapper section.
- `{ selector: string, inclusive?: boolean }`: A node selector, with optional `inclusive` option to specify whether the start node should be included in the new wrapper section (`true`, default) or not (`false`).

### `options.end` (optional)

Either:

- `string`: A node selector passed to [`unist-util-select`](https://github.com/syntax-tree/unist-util-select). Nodes matching the selector end the current wrapper section.
- `{ selector: string, inclusive?: boolean }`: A node selector, with optional `inclusive` option to specify whether the end node should be included in the current wrapper section (`true`) or not (`false`, default).

If `end` is not defined then it is set to the same as `start`.

### `options.transform` (optional)

The `transform` function is passed each new wrapper node and should return a node. See [`test.js`](https://github.com/bradlc/remark-rehype-wrap/blob/main/test.js#L76-L89) for an example.
