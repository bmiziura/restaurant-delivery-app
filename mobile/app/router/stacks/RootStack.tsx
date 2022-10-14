import { useAuth } from "@/contexts/AuthContext"
import { NavigatorScreenParams } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import AuthStack, { AuthStackParamList } from "./Auth/AuthStack"
import MainStack, { MainStackParamList } from "./Main/MainStack"

export type RootStackParamList = {
  AuthStack: NavigatorScreenParams<AuthStackParamList>
  MainStack: NavigatorScreenParams<MainStackParamList>
  CompanyStack: undefined
}

const RootStack = createNativeStackNavigator<RootStackParamList>()

const RootStackNavigator = () => {
  const { user } = useAuth()

  return (
    <RootStack.Navigator
      initialRouteName={user ? "MainStack" : "AuthStack"}
      screenOptions={{
        headerShown: false,
      }}
    >
      <RootStack.Screen name="AuthStack" component={AuthStack} />
      <RootStack.Screen name="MainStack" component={MainStack} />
    </RootStack.Navigator>
  )
}

export default RootStackNavigator
