/**
 * @param {Rule} query
 * @param {Node} node
 * @param {number | undefined} index
 * @param {Parent | undefined} parent
 * @param {SelectState} state
 * @returns {boolean}
 */
export function test(
  query: Rule,
  node: Node,
  index: number | undefined,
  parent: Parent | undefined,
  state: SelectState
): boolean
export type Rule = import('./types.js').Rule
export type Node = import('./types.js').Node
export type Parent = import('./types.js').Parent
export type SelectState = import('./types.js').SelectState
