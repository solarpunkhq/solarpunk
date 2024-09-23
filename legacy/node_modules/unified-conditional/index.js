export function unifiedConditional(...rules) {
  return (...args) => {
    let filename = args[1]?.history?.[0]

    if (!filename) {
      return
    }

    if (!Array.isArray(rules[0])) {
      rules = [rules]
    }

    for (let rule of rules) {
      let [condition, pluginsIf, pluginsElse = []] = rule

      let plugins =
        (typeof condition === 'string' && filename === condition) ||
        (condition instanceof RegExp && condition.test(filename)) ||
        (typeof condition === 'function' && condition(...args))
          ? pluginsIf
          : pluginsElse

      for (let plugin of plugins) {
        let options = []
        if (Array.isArray(plugin)) {
          ;[plugin, ...options] = plugin
        }
        plugin(...options)(...args)
      }
    }
  }
}
