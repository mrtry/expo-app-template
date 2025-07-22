// importを相対pathで書かないと、typesafe-i18nがエラーを出す
// see: https://github.com/ivanhofer/typesafe-i18n/discussions/677#discussioncomment-6092908
// eslint-disable-next-line no-relative-import-paths/no-relative-import-paths
import type { NamespaceLoginTranslation } from '../../i18n-types';

const dictionary = {
  top: {
    header: 'ホーム',
    body: 'ホーム画面',
    button: 'ログイン画面へ移動',
  },
  login: {
    header: 'ログイン',
    body: 'ログイン画面',
    button: '認証済み画面へ移動',
  },
} satisfies NamespaceLoginTranslation;

export default dictionary;
