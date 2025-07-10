import type { Preview } from '@storybook/react';
import { Provider as PaperProvider } from 'react-native-paper';

import { ThemeProvider } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { NavigationTheme, PaperTheme } from '../src/constants/Colors';

const preview: Preview = {
  decorators: [
    (Story) => (
      <PaperProvider theme={PaperTheme}>
        <ThemeProvider value={NavigationTheme}>
          <Story />
          <StatusBar style="auto" />
        </ThemeProvider>
      </PaperProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
