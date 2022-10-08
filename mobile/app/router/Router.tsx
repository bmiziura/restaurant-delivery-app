import React from "react"

import { NavigationContainer } from "@react-navigation/native"
import RootStackNavigator from "./stacks/RootStack"

const Router = () => {
  return (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  )
}

export default Router
