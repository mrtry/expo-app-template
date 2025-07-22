import { Stack } from 'expo-router';

import { useTranslation } from '@/i18n/utils/hooks';

const AuthedLayout = () => {
  const { translation } = useTranslation();

  return (
    <Stack>
      <Stack.Screen name="home" options={{ title: translation.home.top.header() }} />
    </Stack>
  );
};

export default AuthedLayout;
