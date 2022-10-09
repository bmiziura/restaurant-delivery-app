import Container from "@/components/layout/Container"
import SafeAreaContainer from "@/components/layout/SafeAreaContainer"
import Button from "@/components/ui/button/Button"
import Input, { PasswordInput } from "@/components/ui/input/Input"
import TopNavigationBar from "@/components/ui/navigation/TopNavigationBar"
import React from "react"
import { StyleSheet, Text } from "react-native"

const RegisterModalScreen = () => {
  return (
    <SafeAreaContainer>
      <TopNavigationBar />

      <Container>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Sign Up</Text>
        <Text>Sign up to access more features!</Text>
      </Container>

      <Container style={{ marginTop: 32 }}>
        <Input
          label="Email address"
          inputOptions={{
            placeholder: "Email address",
            keyboardType: "email-address",
            textContentType: "emailAddress",
          }}
        />
        <PasswordInput style={{ marginTop: 8 }} />
        <PasswordInput
          style={{ marginTop: 8 }}
          label="Confirm Password"
          inputOptions={{
            placeholder: "Confirm Password",
          }}
        />

        <Button text="Sign up" containerStyle={{ marginTop: 32 }} />
      </Container>
    </SafeAreaContainer>
  )
}

export default RegisterModalScreen

const styles = StyleSheet.create({})
