import Container from "@/components/layout/Container"
import SafeAreaContainer from "@/components/layout/SafeAreaContainer"
import Button, { InvertedButton } from "@/components/ui/button/Button"
import Input, { PasswordInput } from "@/components/ui/input/Input"
import TopNavigationBar from "@/components/ui/navigation/TopNavigationBar"
import { AuthStackParamList } from "@/router/stacks/Auth/AuthStack"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import React from "react"
import { StyleSheet, Text } from "react-native"

type Props = NativeStackScreenProps<AuthStackParamList, "LoginModal">

const LoginModalScreen = ({ route, navigation }: Props) => {
  const openSignUp = () => {
    navigation.navigate("RegisterModal")
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
          }}
        />
        <PasswordInput style={{ marginTop: 8 }} />

        <Button text="Sign in" containerStyle={{ marginTop: 32 }} />

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
