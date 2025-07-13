import expoConfig from 'eslint-config-expo/flat.js';
import prettierConfig from 'eslint-config-prettier';
import checkFilePlugin from 'eslint-plugin-check-file';
import noRelativeImportPaths from 'eslint-plugin-no-relative-import-paths';
import perfectionistPlugin from 'eslint-plugin-perfectionist';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactNativePlugin from 'eslint-plugin-react-native';
import unicornPlugin from 'eslint-plugin-unicorn';
import globals from 'globals';
import { config as tsLintConfig, plugin as tsLintPlugin } from 'typescript-eslint';

export default tsLintConfig(
  {
    ignores: [
      'node_modules/',
      'dist/',
      '.expo/',
      'metro.config.js',
      'babel.config.js',
      'eslint.config.mjs',
      '.rnstorybook/storybook.requires.ts'
    ],
  },

  ...expoConfig,

  // --- perfectionist 推奨設定 ---
  perfectionistPlugin.configs['recommended-natural'],

  // --- perfectionist カスタムルール ---
  {
    rules: {
      'perfectionist/sort-objects': [
        'error',
        {
          type: 'natural',
          ignoreCase: true,
          partitionByNewLine: true,
        },
      ],
      'perfectionist/sort-imports': 'off',
    },
  },

  // --- メインのカスタム設定 ---
  {
    files: ['src/**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.es2021,
        __DEV__: 'readonly',
      },
    },
    settings: {
      'import/resolver': {
        alias: {
          map: [
            ['@', './src']
          ],
          extensions: ['.js', '.jsx', '.ts', '.tsx']
        }
      }
    },
    plugins: {
      '@typescript-eslint': tsLintPlugin,
      'check-file': checkFilePlugin,
      'no-relative-import-paths': noRelativeImportPaths,
      'react-hooks': reactHooksPlugin,
      'react-native': reactNativePlugin,
      'unicorn': unicornPlugin,
    },
    rules: {
      // ESLint Core Rules
      'no-console': 'error',
      'prefer-const': 'error',

      // eslint-plugin-import
      'import/no-cycle': 'error',
      'import/order': 'error',

      // @typescript-eslint
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],

      // eslint-plugin-react
      'react/react-in-jsx-scope': 'off',
      'react/function-component-definition': [
        'error',
        { 'namedComponents': 'arrow-function', 'unnamedComponents': 'arrow-function' }
      ],

      // eslint-plugin-unicorn
      'unicorn/explicit-length-check': 'error',
      'unicorn/no-array-reduce': 'error',
      'unicorn/no-nested-ternary': 'error',
      'unicorn/no-null': 'error',
      'unicorn/prefer-switch': 'error',
      'unicorn/prefer-ternary': 'error',

      // File naming rules
      'check-file/filename-naming-convention': [
        'error',
        {
          'src/features/**/components/**/*.{js,ts}': 'CAMEL_CASE',
          'src/features/**/components/**/*.{jsx,tsx}': 'PASCAL_CASE',
        },
        {
          ignoreWords: ['src', 'components', '+not-found'],
        },
      ],
      // ★ ここでは基本ルールのみを定義
      'check-file/folder-naming-convention': [
        'error',
        { 'src/**/': 'KEBAB_CASE' },
        {
          ignoreWords: ['(authed)'],
        },
      ],

      'no-relative-import-paths/no-relative-import-paths': [
        'error',
        { allowSameFolder: true, prefix: '@', rootDir: 'src' },
      ],
    },
  },

  // --- `components` フォルダ配下の命名規則を上書き ---
  {
    files: ['src/components/**/*', 'src/features/**/components/**/*'],
    plugins: { 'check-file': checkFilePlugin },
    rules: {
      'check-file/folder-naming-convention': [
        'error',
        { 'src/features/**/components/**/*': 'PASCAL_CASE' },
        {
          ignoreWords: ['src', 'components'],
        },
      ],
    },
  },
  // --- `index` ファイルを命名規則のチェックから除外 ---
  {
    files: ['**/index.{js,jsx,ts,tsx}'],
    rules: {
      'check-file/filename-naming-convention': 'off',
    },
  },
  prettierConfig,
);
