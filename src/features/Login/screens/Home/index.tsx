import { View, Text, Button } from "react-native";
import {useRouter} from "expo-router";

export const HomeScreen = () => {
  const router = useRouter()
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title={'Navigate to login'}
        onPress={() => router.push('/login')}
      />
    </View>
  )
}