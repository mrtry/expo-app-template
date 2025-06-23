import { DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';
import { adaptNavigationTheme, MD3LightTheme } from 'react-native-paper';

const { LightTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
});

export const PaperTheme = MD3LightTheme;
export const NavigationTheme = {
  ...LightTheme,
  fonts: {
    ...NavigationDefaultTheme.fonts,
  },
};
