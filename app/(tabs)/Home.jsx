import { useContext, useEffect } from 'react'
import { View, Text } from 'react-native'
import { useRouter } from "expo-router";


import { UserContext } from '../../context/UserContext';


export default function Home() {
  const { user } = useContext(UserContext);

  const router = useRouter();

  useEffect(() => {
    if (!user?.weight) {
      router.replace('/preference')
    }
  }, [user]);

  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}
