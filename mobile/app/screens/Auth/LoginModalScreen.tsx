import Container from "@/components/layout/Container"
import SafeAreaContainer from "@/components/layout/SafeAreaContainer"
import Button, { InvertedButton } from "@/components/ui/button/Button"
import Input, { PasswordInput } from "@/components/ui/input/Input"
import TopNavigationBar from "@/components/ui/navigation/TopNavigationBar"
import { useAuth } from "@/contexts/AuthContext"
import { AuthStackParamList } from "@/router/stacks/Auth/AuthStack"
import { RootStackParamList } from "@/router/stacks/RootStack"
import { useNavigation } from "@react-navigation/native"
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack"
import React, { useState } from "react"
import { StyleSheet, Text } from "react-native"

type Props = NativeStackScreenProps<AuthStackParamList, "LoginModal">

const LoginModalScreen = ({ route, navigation }: Props) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [error, setError] = useState()

  const [loggingIn, setLoggingIn] = useState(false)

  const { signIn } = useAuth()

  const openSignUp = () => {
    navigation.navigate("RegisterModal")
  }

  const rootNavigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  const handleSignIn = async () => {
    if (loggingIn) return

    setLoggingIn(true)
    setError(undefined)

    try {
      await signIn(email, password)

      rootNavigation.reset({
        index: 0,
        routes: [
          {
            name: "MainStack",
          },
        ],
      })
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoggingIn(false)
    }
  }

  return (
    <SafeAreaContainer>
      <TopNavigationBar />

      <Container>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Sign In</Text>
        <Text>Sign in to access more features!</Text>
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
            onEndEditing: () => {
              console.log("hello world")
            },
          }}
        />
        <PasswordInput
          style={{ marginTop: 8 }}
          inputOptions={{
            value: password,
            onChangeText: (value) => setPassword(value),
          }}
        />

        {error && (
          <Text style={{ marginTop: 8, color: "red" }}>Error: {error}</Text>
        )}

        <Button
          text="Sign in"
          containerStyle={{ marginTop: 32 }}
          touchableOptions={{ onPress: handleSignIn }}
        />

        <InvertedButton
          text="Sign up"
          containerStyle={{ marginTop: 8 }}
          touchableOptions={{ onPress: openSignUp }}
        />
      </Container>
    </SafeAreaContainer>
  )
}

export default LoginModalScreen

const styles = StyleSheet.create({})
