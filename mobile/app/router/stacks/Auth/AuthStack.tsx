import React from "react"

import LoginScreen from "@/screens/Auth/LoginScreen"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

export type AuthStackParamList = {
  Login: undefined
  EmailLogin: undefined
}

const AuthStack = createNativeStackNavigator<AuthStackParamList>()

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name="Login" component={LoginScreen} />
    </AuthStack.Navigator>
  )
}

export default AuthStackNavigator
