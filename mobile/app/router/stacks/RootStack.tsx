import { createNativeStackNavigator } from "@react-navigation/native-stack"

import AuthStack, { AuthStackParamList } from "./Auth/AuthStack"
import HomeStack, { HomeStackParamList } from "./Home/HomeStack"

export type RootStackParamList = {
  AuthStack: AuthStackParamList
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
      <RootStack.Screen name="AuthStack" component={AuthStack} />
      <RootStack.Screen name="HomeStack" component={HomeStack} />
    </RootStack.Navigator>
  )
}

export default RootStackNavigator
