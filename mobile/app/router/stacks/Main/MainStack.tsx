import React from "react"

import NotificationsScreen from "@/screens/Main/NotificationsScreen"
import SearchScreen from "@/screens/Main/SearchScreen"
import { NavigatorScreenParams } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeStackNavigator, { HomeStackParamList } from "./Home/HomeStack"

export type MainStackParamList = {
  HomeStack: NavigatorScreenParams<HomeStackParamList>

  Notifications: undefined
  Search: {
    text?: string
    focus?: boolean
  }
}

const MainStack = createNativeStackNavigator<MainStackParamList>()

const MainStackNavigator = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="HomeStack"
    >
      <MainStack.Screen name="HomeStack" component={HomeStackNavigator} />
      <MainStack.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{ animation: "slide_from_right" }}
      />
      <MainStack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          animation: "none",
        }}
      />
    </MainStack.Navigator>
  )
}

export default MainStackNavigator
