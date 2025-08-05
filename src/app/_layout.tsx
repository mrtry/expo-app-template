// polyfill
import '@formatjs/intl-getcanonicallocales/polyfill';
import '@formatjs/intl-locale/polyfill';
import '@formatjs/intl-pluralrules/polyfill';

import 'react-native-reanimated';

import { SplashScreen, Stack } from 'expo-router';

import { ApplicationRoot } from '@/features/application/components/ApplicationRoot';
import { useTranslation } from '@/i18n/utils/hooks';

SplashScreen.preventAutoHideAsync().catch(() => {
  // no-op
});

const ApplicationLayout = () => {
  return (
    <ApplicationRoot>
      <RootLayout />
    </ApplicationRoot>
  );
};

const RootLayout = () => {
  const { translation } = useTranslation();

  return (
    <Stack>
      <Stack.Screen name={'index'} options={{ title: translation.login.top.header() }} />
      <Stack.Screen name={'login'} options={{ title: translation.login.login.header() }} />
      <Stack.Screen name={'(authed)'} options={{ headerShown: false }} />
    </Stack>
  );
};

export default ApplicationLayout;
