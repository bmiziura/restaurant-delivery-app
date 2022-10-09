import React from "react"

import LoginModalScreen from "@/screens/Auth/LoginModalScreen"
import LoginScreen from "@/screens/Auth/LoginScreen"
import RegisterModalScreen from "@/screens/Auth/RegisterModalScreen"

import { createNativeStackNavigator } from "@react-navigation/native-stack"

export type AuthStackParamList = {
  Login: undefined
  LoginModal: undefined
  RegisterModal: undefined
}

const AuthStack = createNativeStackNavigator<AuthStackParamList>()

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Group>
        <AuthStack.Screen name="Login" component={LoginScreen} />
      </AuthStack.Group>

      <AuthStack.Group screenOptions={{ presentation: "modal" }}>
        <AuthStack.Screen name="LoginModal" component={LoginModalScreen} />
        <AuthStack.Screen
          name="RegisterModal"
          component={RegisterModalScreen}
        />
      </AuthStack.Group>
    </AuthStack.Navigator>
  )
}

export default AuthStackNavigator
