import React, { useEffect } from "react"

import { NavigationContainer } from "@react-navigation/native"
import RootStackNavigator from "./stacks/RootStack"

import { useAuth } from "@/contexts/AuthContext"

import * as SplashScreen from "expo-splash-screen"

SplashScreen.preventAutoHideAsync()

const Router = () => {
  const { loaded } = useAuth()

  useEffect(() => {
    if (!loaded) return

    const hideSplash = async () => {
      await SplashScreen.hideAsync()
    }

    hideSplash()
  }, [loaded])

  if (!loaded) return null

  return (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  )
}

export default Router
