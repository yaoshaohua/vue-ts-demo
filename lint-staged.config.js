// lint-staged.config.js
module.exports = {
  'src/**/*.{ts,js,vue}': ['eslint --fix', 'git add'],
  'src/**/*.{vue,html,css,scss,sass}': ['stylelint --fix', 'git add'],
  'src/**/*.{ts,js,vue,html,css,scss,sass}': [
    'prettier-eslint --write',
    'git add',
  ],
}
