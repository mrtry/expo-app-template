import { View } from "react-native";
import { useRouter} from "expo-router";
import { Button } from "@/src/components/Button";
import { Text } from '@/src/components/Text'

export const LoginScreen = () => {
  const router = useRouter()
  return (
    <View>
      <Text variant={'bodyMedium'}>Login Screen</Text>
      <Button
        mode={'text'}
        onPress={() => router.push('/(authed)/home')}
      >
        Navigate to Authed Home
      </Button>
    </View>
  )
}