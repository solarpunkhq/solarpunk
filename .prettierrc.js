module.exports = {
  printWidth: 100,
  trailingComma: 'all',
  singleQuote: true,
  importOrder: [
    '^(next)|(next/(.*))$',
    '^(react)|(react/(.*))$',
    '<THIRD_PARTY_MODULES>',
    '^@/components/(.*)$',
    '^@/types/(.*)$',
    '^@/lib/(.*)$',
    '^@/hooks/(.*)$',
    '^@/constants/(.*)$',
    '^@/styles/(.*)$',
    '^@/images/(.*)$',
    '^@/svgs/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: false,
  plugins: [require('prettier-plugin-tailwindcss')],
};