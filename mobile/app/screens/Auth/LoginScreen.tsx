import React from "react"
import { StyleSheet, Text } from "react-native"

import Button from "@/components/button/Button"
import SafeAreaContainer from "@/components/layout/SafeAreaContainer"

const LoginScreen = () => {
  return (
    <SafeAreaContainer>
      <Text>LoginScreen</Text>

      <Button />
    </SafeAreaContainer>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})
