import {
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
  MD3LightTheme,
  adaptNavigationTheme,
} from 'react-native-paper';

const { LightTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
});

export const PaperTheme = MD3LightTheme
export const NavigationTheme = {
  ...LightTheme,
  fonts: {
    ...NavigationDefaultTheme.fonts,
  }
}