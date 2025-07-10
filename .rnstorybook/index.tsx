import AsyncStorage from '@react-native-async-storage/async-storage';

import 'react-native-reanimated';

import { view } from './storybook.requires';

export const StorybookApp = view.getStorybookUI({
  storage: {
    getItem: AsyncStorage.getItem,
    setItem: AsyncStorage.setItem,
  },
});
