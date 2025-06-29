/** @type {import('dependency-cruiser').IConfiguration} */
module.exports = {
  forbidden: [
    /*
     * # 1. features 間の依存を禁止
     */
    {
      comment:
        'featuresは他のfeaturesからインポートすべきではありません。featuresは自己完結しているべきです。' +
        '代わりに`components`、`hooks`、`stores`、または`utils`を介してコードを共有してください。',
      from: { path: 'src/features/([^/]+)/' },
      name: 'no-cross-feature-imports',
      severity: 'error',
      to: {
        path: 'src/features/([^/]+)/',
        pathNot: 'src/features/$1/',
      },
    },

    /*
     * # 2. 共有モジュールから features への依存を禁止 (appディレクトリを除外)
     */
    {
      comment:
        '共有モジュール（src配下のfeatures, app以外の全ディレクトリ）はfeaturesからインポートすべきではありません。' +
        'これにより、一方向の依存関係フローが強制されます。',
      from: {
        path: '^src/((?!features|app)[^/]+)',
      },
      name: 'no-shared-to-feature-imports',
      severity: 'error',
      to: {
        path: 'src/features',
      },
    },

    /*
     * # 3. appディレクトリ外からappディレクトリ内への依存を禁止
     */
    {
      comment:
        'appディレクトリはルーティング定義に特化しており、他のモジュール（features, componentsなど）からインポートされるべきではありません。',
      from: {
        pathNot: '^src/app',
      },
      name: 'no-importing-from-app-dir',
      severity: 'error',
      to: {
        path: '^src/app',
      },
    },

    /*
     * # 4. 循環依存を禁止
     */
    {
      comment:
        '循環依存は、複雑で予測不可能なコードにつながる可能性があるため禁止されています。',
      from: {},
      name: 'no-circular-dependencies',
      severity: 'error',
      to: {
        circular: true,
      },
    },

    /*
     * # 5. 孤立したモジュールを検出
     */
    {
      comment:
        "これは、他のどのモジュールからもインポートされていないモジュールを検出します。それらはデッドコード（不要なコード）である可能性があります。",
      from: {
        orphan: true,
        pathNot: [
            '(^|/)\\.[^/]+\\.(js|jsx|ts|tsx)$', // dotfiles
            '\\.d\\.ts$', // type declaration files
            '(^|/)vite-env\\.d\\.ts$', // vite env file
            '\\.test\\.(js|jsx|ts|tsx)$', // test files
            '\\.spec\\.(js|jsx|ts|tsx)$', // spec files
            '\\.stories\\.(js|jsx|ts|tsx)$', // storybook files
        ],
      },
      name: 'no-orphans',
      severity: 'warn',
      to: {},
    },
  ],
  options: {
    doNotFollow: {
      path: 'node_modules',
    },
    tsConfig: {
      fileName: 'tsconfig.json',
    },
    tsPreCompilationDeps: true,
  },
};
