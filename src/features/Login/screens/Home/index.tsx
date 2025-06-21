import { View } from "react-native";
import { Text } from '@/src/components/Text'

import {useRouter} from "expo-router";
import { Button } from "@/src/components/Button";

export const HomeScreen = () => {
  const router = useRouter()
  return (
    <View>
      <Text variant={'bodyMedium'}>Home Screen</Text>
      <Button
        mode={'text'}
        onPress={() => router.push('/login')}
      >
        Navigate to login
      </Button>
    </View>
  )
}