import expoConfig from 'eslint-config-expo/flat.js';
import prettierConfig from 'eslint-config-prettier';
import checkFilePlugin from 'eslint-plugin-check-file';
import noRelativeImportPaths from 'eslint-plugin-no-relative-import-paths';
import perfectionistPlugin from 'eslint-plugin-perfectionist';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactNativePlugin from 'eslint-plugin-react-native';
import unicornPlugin from 'eslint-plugin-unicorn';
import unusedImportsPlugin from 'eslint-plugin-unused-imports';
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

  {
    rules: {
      'no-console': 'error',
    },
  },

  // --- perfectionist 推奨設定 ---
  perfectionistPlugin.configs['recommended-natural'],

  // --- perfectionist カスタムルール ---
  {
    rules: {
      'perfectionist/sort-objects': 'off',
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
      'unused-imports': unusedImportsPlugin,
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
      '@typescript-eslint/no-unused-vars': 'off', // unused-importsプラグインを使用するため無効化

      // eslint-plugin-unused-imports
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
      ],

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
      // 基本のでィレクトリ名についてのrule
      'check-file/folder-naming-convention': [
        'error',
        {
          'src/**/': 'KEBAB_CASE'
        },
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

  // --- `components` 以下はPascalCase ---
  {
    files: ['src/components/**/*', 'src/features/**/components/**/*'],
    plugins: { 'check-file': checkFilePlugin },
    rules: {
      'check-file/folder-naming-convention': [
        'error',
        { 'components/**/*': 'PASCAL_CASE' },
        {
          ignoreWords: ['__tests__'],
        },
      ],
    },
  },
  // --- `hooks` 以下は、ファイル名/ディレクトリ名を useXxx とする--
  {
    files: ['src/**/hooks/**/*'],
    plugins: { 'check-file': checkFilePlugin },
    rules: {
      'check-file/folder-naming-convention': [
        'error',
        { 'hooks/*': 'use[A-Z][a-zA-Z0-9]*' },
      ],
      'check-file/filename-naming-convention': [
        'error',
        { 'hooks/**/*.{js,jsx,ts,tsx}': 'use[A-Z][a-zA-Z0-9]*' },
      ],
    },
  },
  // --- `index` は、名規則のチェックから除外 ---
  {
    files: ['**/index.{js,jsx,ts,tsx}'],
    rules: {
      'check-file/filename-naming-convention': 'off',
    },
  },
  // --- scripts ディレクトリでは no-console を無効化 ---
  {
    files: ['scripts/**/*'],
    rules: {
      'no-console': 'off',
    },
  },
  prettierConfig,
);
