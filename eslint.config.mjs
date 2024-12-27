/* eslint-disable prettier/prettier */
import cypress from 'eslint-plugin-cypress';
import prettier from 'eslint-plugin-prettier';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  ...compat.extends(
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:cypress/recommended'
  ),
  {
    plugins: {
      cypress,
      prettier,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...cypress.environments.globals.globals,
      },

      ecmaVersion: 2022,
      sourceType: 'module',
    },

    settings: {},

    rules: {
      'prettier/prettier': 'error',
    },
  },
];
