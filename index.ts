/* eslint-disable @typescript-eslint/no-require-imports */
import Constants from 'expo-constants';

// eslint-disable-next-line no-unused-expressions
Constants.expoConfig?.extra?.storybookEnabled
  ? require('./index.storybook.ts')
  : require('./index.app.ts');
