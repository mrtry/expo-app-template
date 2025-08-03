#!/usr/bin/env zx

/**
 * typesafe-i18nを別のターミナルで管理するスクリプト
 *
 * 目的:
 * - yarn startなどの開発サーバー起動時に、typesafe-i18nを独立したターミナルで実行
 * - Ctrl+Cで開発サーバーだけを終了でき、typesafe-i18nは継続実行される
 * - 重複起動を防止（既に実行中の場合はスキップ）
 *
 * 動作:
 * 1. 既存のtypesafe-i18nプロセスが実行中かチェック
 * 2. 実行中でない場合のみ、新しいTerminal.appタブでtypesafe-i18nを起動
 * 3. タブタイトルを「typesafe-i18n」に設定して識別しやすくする
 *
 * 使用場所:
 * - package.jsonの各startスクリプトで実行される
 */

/* eslint-disable no-undef */
import 'zx/globals';

/**
 * typesafe-i18nプロセスが実行中かどうかをチェック
 * @returns {Promise<boolean>} プロセスが実行中の場合true
 */
async function checkIfI18nRunning() {
  try {
    // typesafe-i18nプロセスが実行中かチェック
    const result = await $`pgrep -f "typesafe-i18n"`.quiet();
    return result.exitCode === 0;
  } catch (_error) {
    return false;
  }
}

/**
 * メイン処理
 * typesafe-i18nプロセスの状態をチェックし、必要に応じて起動する
 */
async function main() {
  console.log('typesafe-i18nプロセスを管理しています...');

  // typesafe-i18nが既に実行中かチェック
  const isI18nRunning = await checkIfI18nRunning();

  if (isI18nRunning) {
    console.log('typesafe-i18nは既に実行中です。スキップします。');
    return;
  }

  // 新しいシェルでtypesafe-i18nを起動
  console.log('typesafe-i18nを新しいシェルで起動しています...');
  await startI18nInNewShell();
  console.log('typesafe-i18nが新しいシェルで起動されました。');
}

/**
 * 新しいTerminal.appタブでtypesafe-i18nを起動
 * AppleScriptを使用してmacOSのTerminal.appで新しいタブを開き、
 * そこでtypesafe-i18nコマンドを実行する
 */
async function startI18nInNewShell() {
  try {
    // 新しいターミナルでtypesafe-i18nを起動（タイトルを設定）
    await $`osascript -e '
      tell application "Terminal"
        do script "cd ${process.cwd()} && echo \\"typesafe-i18n starting...\\" && yarn typesafe-i18n"
        set custom title of tab 1 of front window to "typesafe-i18n"
      end tell
    '`;
  } catch (error) {
    console.warn('typesafe-i18nの起動中にエラーが発生しました:', error);
  }
}

// スクリプト実行
main().catch(console.error);
