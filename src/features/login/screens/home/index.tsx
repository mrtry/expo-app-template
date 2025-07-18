import { useRouter } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

import { Text } from '@/components/Text';

export const HomeScreen = () => {
  const router = useRouter();
  return (
    <View>
      <Text variant={'bodyMedium'}>Home Screen</Text>
    </View>
  );
};
