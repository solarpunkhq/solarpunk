/**
 * Check whether an node matches pseudo selectors.
 *
 * @param {Rule} query
 * @param {Node} node
 * @param {number | undefined} index
 * @param {Parent | undefined} parent
 * @param {SelectState} state
 * @returns {boolean}
 */
export function pseudo(
  query: Rule,
  node: Node,
  index: number | undefined,
  parent: Parent | undefined,
  state: SelectState
): boolean
export namespace pseudo {
  const needsIndex: string[]
}
export type Rule = import('./types.js').Rule
export type RulePseudo = import('./types.js').RulePseudo
export type RulePseudoSelector = import('./types.js').RulePseudoSelector
export type Parent = import('./types.js').Parent
export type SelectState = import('./types.js').SelectState
export type Node = import('./types.js').Node
