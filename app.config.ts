/* eslint perfectionist/sort-objects: off */

import { ExpoConfig } from 'expo/config';

import { BuildEnvironment } from './config/types';

const packageName = 'com.example.testapp';

export default (): ExpoConfig => {
  const env = (process.env.APP_VARIANT as BuildEnvironment) || 'development';

  return {
    name: 'my-test-app',
    slug: 'my-test-app',
    version: '1.0.0',
    orientation: 'portrait',
    scheme: 'expoapptemplate',
    userInterfaceStyle: 'light',
    platforms: ['ios', 'android'],

    android: {
      package: 'com.example.testapp',
    },
    ios: {
      bundleIdentifier: 'com.example.testapp',
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
