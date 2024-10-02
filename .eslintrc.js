module.exports = {
  root: true,
  extends: ['next/core-web-vitals', 'prettier'],
  ignorePatterns: ['public/videos/*'],
  rules: {
    curly: 'error',
    'no-nested-ternary': 'error',
    'react/jsx-sort-props': [
      'error',
      {
        noSortAlphabetically: true,
        shorthandLast: true,
        callbacksLast: true,
      },
    ],
    'react/no-array-index-key': 'off',
    'react/no-danger': 'warn',
    'react/self-closing-comp': 'error',
    'jsx-a11y/alt-text': 'error',
    'import/no-extraneous-dependencies': 'error',
    'react/display-name': 'off',
    'react/no-unescaped-entities': 'off',
  },
};
