import React from "react"
import { StyleSheet, Text, View } from "react-native"

import SafeAreaContainer from "@/components/layout/SafeAreaContainer"
import AuthButton from "@/components/ui/button/AuthButton"

const LoginScreen = () => {
  return (
    <SafeAreaContainer>
      <View>
        <Text>Skip</Text>
      </View>

      <View>
        <AuthButton text="Continue with Google" icon={<Text>G</Text>} />
      </View>
    </SafeAreaContainer>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})
