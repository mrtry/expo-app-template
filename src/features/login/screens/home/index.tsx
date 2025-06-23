import { useRouter } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

import { Button } from '@/components/Button';
import { Text } from '@/components/Text';

export const HomeScreen = () => {
  const router = useRouter();
  return (
    <View>
      <Text variant={'bodyMedium'}>Home Screen</Text>
      <Button mode={'text'} onPress={() => router.push('/login')}>
        Navigate to login
      </Button>
    </View>
  );
};
