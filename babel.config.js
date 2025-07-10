module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      [
        'babel-preset-expo',
        {
          // Reanimatedプラグインを自動適用（react-native-reanimatedがインストール済み）
          reanimated: true,

          // 本番環境でのバンドルサイズ最適化（windowオブジェクトの型チェックを最適化）
          native: {
            minifyTypeofWindow: true,
          },
        },
      ],
    ],
    env: {
      // Jest テスト環境での設定
      test: {
        presets: [
          [
            'babel-preset-expo',
            {
              reanimated: true,
              native: {
                minifyTypeofWindow: true,
              },
              // import.metaの変換を有効化（Jest実行時のみ）
              web: {
                unstable_transformImportMeta: true,
              },
            },
          ],
        ],
      },
      production: {
        plugins: [
          // React Native Paperの本番最適化
          'react-native-paper/babel',
        ],
      },
    },
  };
};
