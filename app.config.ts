import 'ts-node/register';
/* eslint perfectionist/sort-objects: off */

import { ExpoConfig } from 'expo/config';

import { BuildEnvironment } from './config/types';

const packageName = 'com.expo.template';

export default (): ExpoConfig => {
  const env = (process.env.APP_VARIANT as BuildEnvironment) || 'development';

  return {
    name: 'expo-app-template',
    slug: 'expo-app-template',
    version: '1.0.0',
    orientation: 'portrait',
    scheme: 'expoapptemplate',
    userInterfaceStyle: 'light',
    platforms: ['ios', 'android'],

    android: {
      package: packageName,
    },
    ios: {
      bundleIdentifier: packageName,
      infoPlist: {
        CFBundleLocalizations: ['ja'],
        CFBundleDevelopmentRegion: 'ja_JP',
      },
    },

    extra: {
      storybookEnabled: process.env.STORYBOOK_ENABLED === 'true',
    },
    plugins: [
      ['./plugins/withAppVariant.ts', { env: env }],

      'expo-router',
      [
        'expo-splash-screen',
        {
          backgroundColor: '#ffffff',
          image: './config/common/splash-icon.png',
          imageWidth: 200,
          resizeMode: 'contain',
        },
      ],
    ],
    experiments: {
      typedRoutes: true,
    },
  };
};
