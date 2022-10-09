import React from "react"

import LoginFormScreen from "@/screens/Auth/LoginFormScreen"
import LoginScreen from "@/screens/Auth/LoginScreen"
import RegisterFormScreen from "@/screens/Auth/RegisterFormScreen"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

export type AuthStackParamList = {
  Login: undefined
  LoginForm: undefined
  RegisterForm: undefined
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
      <AuthStack.Screen name="LoginForm" component={LoginFormScreen} />
      <AuthStack.Screen name="RegisterForm" component={RegisterFormScreen} />
    </AuthStack.Navigator>
  )
}

export default AuthStackNavigator
