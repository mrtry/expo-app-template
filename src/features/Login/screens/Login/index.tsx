import {View, Text, Button} from "react-native";
import { useRouter} from "expo-router";

export const LoginScreen = () => {
  const router = useRouter()
  return (
    <View>
      <Text>Login Screen</Text>
      <Button
        title={'Navigate to Authed Home'}
        onPress={() => router.push('/(authed)/home')}
      />
    </View>
  )
}