import { createNativeStackNavigator } from "@react-navigation/native-stack"

import HomeScreen from "@/screens/HomeScreen"

const RootStack = createNativeStackNavigator()

const RootStackNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="Home" component={HomeScreen} />
    </RootStack.Navigator>
  )
}

export default RootStackNavigator
