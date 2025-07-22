import React from 'react';
import { View } from 'react-native';

import { Text } from '@/components/Text';
import { useTranslation } from '@/i18n/utils/hooks';

export const HomeScreen = () => {
  const { translation } = useTranslation();
  return (
    <View>
      <Text variant={'bodyMedium'}>{translation.home.top.body()}</Text>
    </View>
  );
};
