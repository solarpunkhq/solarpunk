/**
 * @typedef {import('./types.js').Node} Node
 * @typedef {import('./types.js').Parent} Parent
 */
/**
 * @param {Node} node
 * @returns {node is Parent}
 */
export function parent(
  node: Node
): node is import('unist').Parent<
  import('unist').Node<import('unist').Data>,
  import('unist').Data
>
export type Node = import('./types.js').Node
export type Parent = import('./types.js').Parent
