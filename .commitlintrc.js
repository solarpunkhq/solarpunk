module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [2, 'always', ['apps', 'components', 'assets', 'styles', 'hooks', 'lib']],
  },
};
