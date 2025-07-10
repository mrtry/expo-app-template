#!/usr/bin/env zx

import { question } from 'zx';

// ケバブケースのバリデーション関数
function isKebabCase(str) {
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(str);
}

// 逆DNS形式のバリデーション関数
function isReverseDomainName(str) {
  return /^[a-zA-Z_][a-zA-Z0-9_]*(\.[a-zA-Z_][a-zA-Z0-9_]*)+$/.test(str);
}

// let appName = '';
// while (true) {
//   appName = await question('新しいアプリ名を入力してください (例: my-cool-app): ');
//   if (isKebabCase(appName)) {
//     break;
//   }
//   console.log('無効な形式です。アプリ名はケバブケース（例: my-cool-app）で入力してください。');
// }

// let packageName = '';
// while (true) {
//   packageName = await question('新しいパッケージ名を入力してください (例: com.example.myapp): ');
//   if (isReverseDomainName(packageName)) {
//     break;
//   }
//   console.log('無効な形式です。パッケージ名は逆DNS形式（例: com.example.myapp）で入力してください。');
// }

const appName = 'my-test-app';
const packageName = 'com.example.testapp';

import fs from 'fs-extra';
import path from 'path';

// ... (前のコードは省略)

console.log(`アプリ名: ${appName}`);
console.log(`パッケージ名: ${packageName}`);

const appConfigPath = path.join(process.cwd(), 'app.config.ts');

try {
  let appConfigContent = await fs.readFile(appConfigPath, 'utf-8');

  // name, slug, schemeを更新
  appConfigContent = appConfigContent.replace(/name: '.*?',/, `name: '${appName}',`);
  appConfigContent = appConfigContent.replace(/slug: '.*?',/, `slug: '${appName}',`);
  appConfigContent = appConfigContent.replace(/scheme: '.*?',/, `scheme: '${appName}',`);

  // const packageName = '...'; の定義行を更新する
  appConfigContent = appConfigContent.replace(/const packageName = '.*?';/, `const packageName = '${packageName}';`);


  await fs.writeFile(appConfigPath, appConfigContent, 'utf-8');
  console.log('app.config.ts を更新しました。');
} catch (error) {
  console.error('app.config.ts の更新中にエラーが発生しました:', error);
}
