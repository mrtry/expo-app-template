import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemeProvider } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { PaperProvider } from 'react-native-paper';

import { NavigationTheme, PaperTheme } from '@/constants/Colors';
import 'react-native-reanimated';

import { view } from './storybook.requires';

const StorybookUIRoot = view.getStorybookUI({
  storage: {
    getItem: AsyncStorage.getItem,
    setItem: AsyncStorage.setItem,
  },
});

export const StorybookApp = () => (
  <PaperProvider theme={PaperTheme}>
    <ThemeProvider value={NavigationTheme}>
      <StorybookUIRoot />
      <StatusBar style="auto" />
    </ThemeProvider>
  </PaperProvider>
);
