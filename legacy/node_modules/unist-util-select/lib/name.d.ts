/**
 * @typedef {import('./types.js').Rule} Rule
 * @typedef {import('./types.js').Node} Node
 */
/**
 * Check whether a node has a type.
 *
 * @param {Rule} query
 * @param {Node} node
 */
export function name(query: Rule, node: Node): boolean
export type Rule = import('./types.js').Rule
export type Node = import('./types.js').Node
