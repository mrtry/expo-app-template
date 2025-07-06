import type { ExpoConfig } from '@expo/config-types';
import type { ConfigPlugin } from 'expo/config-plugins';

import { AppVariant, BuildEnvironment } from '../config/types';

type Args = {
  env: BuildEnvironment;
};

/**
 * 環境に応じてアプリの設定を変更するExpo Config Plugin
 */
const withAppVariant: ConfigPlugin<Args> = (config, args) => {
  const { env } = args;

  ensureValidEnvironment(env);
  const envConfig = getAppVariantConfig(env);

  if (!envConfig) {
    throw new Error(`Unknown environment: ${env}`);
  }

  applyAppName(config, envConfig.nameSuffix);
  applyAndroidPackage(config, envConfig.packageSuffix);
  applyIOSBundleIdentifier(config, envConfig.packageSuffix);
  applyAppIcons(config, env);

  return config;
};

const ensureValidEnvironment = (env: BuildEnvironment) => {
  const validEnvironments: BuildEnvironment[] = ['development', 'staging', 'production'];
  if (!validEnvironments.includes(env)) {
    throw new Error(
      `Invalid environment: ${env}. Valid options are: ${validEnvironments.join(', ')}`,
    );
  }
};

/**
 * 環境に応じたアプリのバリアント設定を取得するヘルパー関数
 */
const getAppVariantConfig = (env: BuildEnvironment) => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  return require(`../config/${env}/appVariant`).default as AppVariant;
};

/**
 * アプリのアイコンを環境に応じて設定するヘルパー関数
 */
const applyAppIcons = (config: ExpoConfig, env: BuildEnvironment) => {
  config.android = {
    ...config.android,
    adaptiveIcon: {
      backgroundColor: '#ffffff',
      foregroundImage: `./config/${env}/android-adaptive-icon.png`,
    },
  };

  config.ios = {
    ...config.ios,
    icon: `./config/${env}/ios-icon.png`,
  };
};

/**
 * アプリ名とパッケージ名を環境に応じて変更するヘルパー関数
 */
const applyAppName = (config: ExpoConfig, suffix: string): void => {
  if (suffix) {
    config.name = `${config.name}${suffix}`;
  }
};

/**
 * Androidのパッケージ名を更新するヘルパー関数
 */
const applyAndroidPackage = (config: ExpoConfig, suffix: string): void => {
  if (suffix) {
    config.android = {
      ...config.android,
      package: config.android?.package ? config.android.package + suffix : undefined,
    };
  }
};

/**
 * iOSのバンドルIDを更新するヘルパー関数
 */
const applyIOSBundleIdentifier = (config: ExpoConfig, suffix: string): void => {
  if (suffix) {
    config.ios = {
      ...config.ios,
      bundleIdentifier: config.ios?.bundleIdentifier
        ? config.ios.bundleIdentifier + suffix
        : undefined,
    };
  }
};

export default withAppVariant;
