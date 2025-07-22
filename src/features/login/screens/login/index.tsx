import { useRouter } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

import { Button } from '@/components/Button';
import { Text } from '@/components/Text';
import { useTranslation } from '@/i18n/utils/hooks';

export const LoginScreen = () => {
  const router = useRouter();
  const { translation } = useTranslation();

  return (
    <View>
      <Text variant={'bodyMedium'}>{translation.login.login.body()}</Text>
      <Button mode={'text'} onPress={() => router.push('/(authed)/home')}>
        {translation.login.login.button()}
      </Button>
    </View>
  );
};
