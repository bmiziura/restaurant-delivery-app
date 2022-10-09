import Container from "@/components/layout/Container"
import SafeAreaContainer from "@/components/layout/SafeAreaContainer"
import Button from "@/components/ui/button/Button"
import Input, { PasswordInput } from "@/components/ui/input/Input"
import TopNavigationBar from "@/components/ui/navigation/TopNavigationBar"
import { useAuth } from "@/contexts/AuthContext"
import { RootStackParamList } from "@/router/stacks/RootStack"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import React, { useState } from "react"
import { StyleSheet, Text } from "react-native"

const RegisterModalScreen = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const [error, setError] = useState()

  const [signingUp, setSigningUp] = useState(false)

  const { createUser } = useAuth()

  const rootNavigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  const handleSignUp = async () => {
    if (signingUp) return

    setSigningUp(true)
    setError(undefined)

    try {
      if (password !== confirmPassword) {
        throw new Error("Passwords aren't the same!")
      }

      await createUser(email, password)

      rootNavigation.reset({
        index: 0,
        routes: [
          {
            name: "HomeStack",
          },
        ],
      })
    } catch (err: any) {
      setError(err.message)
    } finally {
      setSigningUp(false)
    }
  }

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
            value: email,
            onChangeText: (value) => setEmail(value),
          }}
        />
        <PasswordInput
          style={{ marginTop: 8 }}
          inputOptions={{
            value: password,
            onChangeText: (value) => setPassword(value),
          }}
        />
        <PasswordInput
          style={{ marginTop: 8 }}
          label="Confirm Password"
          inputOptions={{
            placeholder: "Confirm Password",
            value: confirmPassword,
            onChangeText: (value) => setConfirmPassword(value),
          }}
        />

        {error && (
          <Text style={{ marginTop: 8, color: "red" }}>Error: {error}</Text>
        )}

        <Button
          text="Sign up"
          containerStyle={{ marginTop: 32 }}
          touchableOptions={{ onPress: handleSignUp }}
        />
      </Container>
    </SafeAreaContainer>
  )
}

export default RegisterModalScreen

const styles = StyleSheet.create({})
