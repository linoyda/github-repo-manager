import globals from 'globals';
import pluginJs from '@eslint/js';
import prettierConfig from 'eslint-config-prettier'; // Disable ESLint rules that conflict with Prettier
import pluginPrettier from 'eslint-plugin-prettier'; // Integrate Prettier as an ESLint rule

export default [
  {
    files: ['**/*.js'],
    languageOptions: { sourceType: 'commonjs' },
  },
  {
    languageOptions: { globals: globals.browser },
  },
  pluginJs.configs.recommended,
  prettierConfig, // Disables conflicting ESLint rules
  {
    plugins: {
      prettier: pluginPrettier, // Add the Prettier plugin
    },
    rules: {
      'prettier/prettier': 'error', // Runs Prettier as an ESLint rule and reports errors
    },
  },
];
