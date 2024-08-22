module.exports = {
  'pre-commit': 'npx --no-install lint-staged --concurrent false && npm run type-check',
  'commit-msg': 'npx --no-install commitlint --edit ${1}',
};
