import LoginScreen from "@/screens/Auth/LoginScreen"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import HomeStack, { HomeStackParamList } from "./Home/HomeStack"

export type RootStackParamList = {
  AuthStack: undefined
  HomeStack: HomeStackParamList
  RestaurantPanelStack: undefined
}

const RootStack = createNativeStackNavigator<RootStackParamList>()

const RootStackNavigator = () => {
  return (
    <RootStack.Navigator
      initialRouteName="AuthStack"
      screenOptions={{
        headerShown: false,
      }}
    >
      <RootStack.Screen name="AuthStack" component={LoginScreen} />
      <RootStack.Screen name="HomeStack" component={HomeStack} />
    </RootStack.Navigator>
  )
}

export default RootStackNavigator
