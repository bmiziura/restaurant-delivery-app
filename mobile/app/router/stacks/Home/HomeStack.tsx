import React from "react"

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import HomeScreen from "@/screens/Home/HomeScreen"

export type HomeStackParamList = {
  Home: undefined
}

const HomeStack = createBottomTabNavigator<HomeStackParamList>()

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  )
}

export default HomeStackNavigator
