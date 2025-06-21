import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { PaperProvider } from 'react-native-paper';
import { NavigationTheme, PaperTheme} from "@/src/constants/Colors";

export default function RootLayout() {
  return (
    <PaperProvider theme={PaperTheme}>
      <ThemeProvider value={NavigationTheme}>
        <Stack>
          <Stack.Screen name={'index'} />
          <Stack.Screen name={'login'} />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </PaperProvider>
  );
}
