const pluginJs = require('@eslint/js');
const pluginImport = require('eslint-plugin-import');

module.exports = {
  ignores: ['dist', 'node_modules'],
  plugins: {
    import: pluginImport,
  },
  languageOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'import/no-unresolved': 'error',
  },
};
