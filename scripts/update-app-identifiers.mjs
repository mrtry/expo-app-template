#!/usr/bin/env zx
/* eslint-disable no-undef */
import fs from 'fs-extra';
import path from 'path';
import 'zx/globals';

async function main() {
  const args = process.argv.slice(2);

  // ヘルプオプションの確認
  if (args.includes('-h') || args.includes('--help')) {
    showUsage();
    return;
  }

  // 名前付き引数の解析
  const parsedArgs = parseArgs(args);

  // バリデーション（提供された引数のみ）
  if (parsedArgs.appName && !isKebabCase(parsedArgs.appName)) {
    console.error('エラー: アプリ名はケバブケース（例: my-cool-app）で入力してください。');
    process.exit(1);
  }

  if (parsedArgs.packageName && !isReverseDomainName(parsedArgs.packageName)) {
    console.error('エラー: パッケージ名は逆DNS形式（例: com.example.myapp）で入力してください。');
    process.exit(1);
  }

  // 不足している情報をインタラクティブに取得
  const appName = parsedArgs.appName || (await askUserForAppName());
  const packageName = parsedArgs.packageName || (await askUserForPackageName());

  console.log(`アプリ名: ${appName}`);
  console.log(`パッケージ名: ${packageName}`);
  await updateAppConfig(appName, packageName);
}

main().catch(console.error);

// ----- utils -----

async function askUserForAppName() {
  while (true) {
    const appName = await question('新しいアプリ名を入力してください (例: my-cool-app): ');
    if (isKebabCase(appName)) {
      return appName;
    }
    console.log('無効な形式です。アプリ名はケバブケース（例: my-cool-app）で入力してください。');
  }
}

async function askUserForPackageName() {
  while (true) {
    const packageName = await question(
      '新しいパッケージ名を入力してください (例: com.example.myapp): ',
    );
    if (isReverseDomainName(packageName)) {
      return packageName;
    }
    console.log(
      '無効な形式です。パッケージ名は逆DNS形式（例: com.example.myapp）で入力してください。',
    );
  }
}

// ケバブケースのバリデーション関数
function isKebabCase(str) {
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(str);
}

// 逆DNS形式のバリデーション関数
function isReverseDomainName(str) {
  return /^[a-zA-Z_][a-zA-Z0-9_]*(\.[a-zA-Z_][a-zA-Z0-9_]*)+$/.test(str);
}

function parseArgs(args) {
  const result = {};

  for (const arg of args) {
    if (arg.startsWith('--app-name=')) {
      result.appName = arg.substring('--app-name='.length);
    } else if (arg.startsWith('--package-name=')) {
      result.packageName = arg.substring('--package-name='.length);
    }
  }

  return result;
}

function showUsage() {
  console.log(`
使用方法:
  $ yarn zx update-app-identifiers.mjs --app-name=<アプリ名> --package-name=<パッケージ名>
  $ yarn zx update-app-identifiers.mjs -h | --help

オプション:
  --app-name=<名前>      アプリ名 (ケバブケース形式, 例: my-cool-app)
  --package-name=<名前>  パッケージ名 (逆DNS形式, 例: com.example.myapp)
  -h, --help             このヘルプメッセージを表示

例:
  $ yarn zx update-app-identifiers.mjs --app-name=my-awesome-app --package-name=com.example.myawesomeapp
  $ yarn zx update-app-identifiers.mjs  # インタラクティブモード
`);
}

async function updateAppConfig(appName, packageName) {
  const appConfigPath = path.join(process.cwd(), 'app.config.ts');

  try {
    const appConfigContent = await fs.readFile(appConfigPath, 'utf-8');

    const updatedContent = appConfigContent
      .replace(/name: '.*?',/, `name: '${appName}',`)
      .replace(/slug: '.*?',/, `slug: '${appName}',`)
      .replace(/scheme: '.*?',/, `scheme: '${appName}',`)
      .replace(/const packageName = '.*?';/, `const packageName = '${packageName}';`);

    await fs.writeFile(appConfigPath, updatedContent, 'utf-8');
    console.log('app.config.ts を更新しました。');
  } catch (error) {
    console.error('app.config.ts の更新中にエラーが発生しました:', error);
  }
}
