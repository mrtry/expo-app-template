import { useRouter } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

import { Button } from '@/components/Button';
import { Text } from '@/components/Text';
import { useTranslation } from '@/i18n/utils/hooks';

export const HomeScreen = () => {
  const router = useRouter();
  const { translation } = useTranslation();

  return (
    <View>
      <Text variant={'bodyMedium'}>{translation.login.top.body()}</Text>
      <Button mode={'text'} onPress={() => router.push('/login')}>
        {translation.login.top.button()}
      </Button>
    </View>
  );
};
