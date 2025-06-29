import { useRouter } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

import { Button } from '@/components/Button';
import { Text } from '@/components/Text';

export const LoginScreen = () => {
  const router = useRouter();
  return (
    <View>
      <Text variant={'bodyMedium'}>Login Screen</Text>
      <Button mode={'text'} onPress={() => router.push('/(authed)/home')}>
        Navigate to Authed Home
      </Button>
    </View>
  );
};
