import React from "react"

import { useAuth } from "@/contexts/AuthContext"
import HomeScreen from "@/screens/Main/Home/HomeScreen"
import ProfileScreen from "@/screens/Main/Home/ProfileScreen"
import Colors from "@/theme/Colors"
import { Feather } from "@expo/vector-icons"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

export type HomeStackParamList = {
  Home: undefined
  Favorites: undefined
  Profile: undefined
}

const HomeStack = createBottomTabNavigator<HomeStackParamList>()

const HomeStackNavigator = () => {
  const { user } = useAuth()

  return (
    <HomeStack.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,

        tabBarLabelStyle: {
          fontSize: 12,
        },
      }}
      initialRouteName="Home"
    >
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Feather
                name="home"
                size={24}
                color={focused ? Colors.black : Colors.gray}
              />
            )
          },
        }}
      />
      {user && (
        <HomeStack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Feather
                  name="user"
                  size={24}
                  color={focused ? Colors.black : Colors.gray}
                />
              )
            },
          }}
        />
      )}
    </HomeStack.Navigator>
  )
}

export default HomeStackNavigator
