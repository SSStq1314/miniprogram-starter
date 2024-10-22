// .lintstagedrc.js

module.exports = {
  '*.md': ['prettier --write'],
  '*.{js,ts}': ['eslint --fix . --ext .js,.wxs'],
  '*.{js,ts,wxml,html,json,css,scss}': ['prettier --config .prettierrc.yml --write'],
  '.*': ['git add .']
};
