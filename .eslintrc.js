module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:typescript-sort-keys/recommended',
    'plugin:dependency-cruiser/recommended',
  ],
  plugins: [
    'import',
    'typescript-sort-keys',
    'unicorn',
    'check-file',
  ],
  rules: {
    // これまでの対話で決定した、独自の優先ルール
    'no-console': 'error',
    'prefer-const': 'error',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],

    // "bulletproof-react"から採用したルール
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'
, 'object', 'type'],
        pathGroups: [
          { pattern: 'react', group: 'external', position: 'before' },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],

    // "bulletproof-react"の思想をさらに強化するルール
    'unicorn/filename-case': [
      'error',
      {
        case: 'camelCase',
        patterns: { '**/*.tsx': { case: 'pascalCase' } },
        ignore: [ /^\.eslintrc\.js$/, /^\.prettierrc\.js$/, /^App\.tsx$/ ],
      },
    ],
    'check-file/folder-naming-convention': [
      'error',
      {
        'src/**/': 'kebab-case',
        'src/components/**/': 'PascalCase',
        'src/features/**/components/**/': 'PascalCase',
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};
