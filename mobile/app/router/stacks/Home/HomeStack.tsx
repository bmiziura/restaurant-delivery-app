import HomeScreen from "@/screens/HomeScreen"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import React from "react"

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
