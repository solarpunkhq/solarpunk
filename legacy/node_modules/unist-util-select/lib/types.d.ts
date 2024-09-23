/**
 * Any node.
 */
export type Node = import('unist').Node
/**
 * Node with children.
 */
export type Parent = import('unist').Parent
/**
 * Multiple selectors.
 */
export type Selectors = import('css-selector-parser').Selectors
/**
 * One rule.
 */
export type Rule = import('css-selector-parser').Rule
/**
 * Multiple rules.
 */
export type RuleSet = import('css-selector-parser').RuleSet
/**
 * Pseudo rule.
 */
export type RulePseudo = import('css-selector-parser').RulePseudo
/**
 * Attribute value type.
 */
export type AttrValueType = import('css-selector-parser').AttrValueType
/**
 * Fix for types from `css-selector-parser`.
 */
export type RuleAttr = {
  /**
   *   Attribute name.
   */
  name: string
  /**
   * Operator, such as `'|='`, missing when for example `[x]`.
   */
  operator?: string | undefined
  /**
   * Attribute value type.
   */
  valueType?: AttrValueType | undefined
  /**
   * Attribute value.
   */
  value?: string | undefined
}
/**
 * More specific type for registered selector pseudos.
 */
export type RulePseudoSelector = {
  /**
   *   Name of pseudo, such as `'matches'`.
   */
  name: string
  /**
   *   Set to `'selector'`, because `value` is a compiled selector.
   */
  valueType: 'selector'
  /**
   *   Selector.
   */
  value: Selectors | RuleSet
}
/**
 * Current state.
 */
export type SelectState = {
  /**
   *   Original root selectors.
   */
  rootQuery: Selectors
  /**
   *   Matches.
   */
  results: Array<Node>
  /**
   *   Nodes in scope.
   */
  scopeNodes: Array<Node>
  /**
   *   Whether we can stop looking after we found one node.
   */
  one: boolean
  /**
   *   Whether we only allow selectors without nesting.
   */
  shallow: boolean
  /**
   *   Whether we found at least one match.
   */
  found: boolean
  /**
   *   Track siblings: this current node has `n` nodes with its type before it.
   */
  typeIndex: number | undefined
  /**
   *   Track siblings: this current node has `n` nodes before it.
   */
  nodeIndex: number | undefined
  /**
   *   Track siblings: there are `n` siblings with this node’s type.
   */
  typeCount: number | undefined
  /**
   *   Track siblings: there are `n` siblings.
   */
  nodeCount: number | undefined
}
