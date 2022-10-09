import React from "react"
import { StyleSheet, Text } from "react-native"

import SafeAreaContainer from "@/components/layout/SafeAreaContainer"
import {
  GoogleAuthButton,
  InvertedAuthButton,
  LinkedinAuthButton,
} from "@/components/ui/button/AuthButton"

import Container from "@/components/layout/Container"
import TopNavigationBar from "@/components/ui/navigation/TopNavigationBar"
import TextLine from "@/components/ui/textline/TextLine"
import { AuthStackParamList } from "@/router/stacks/Auth/AuthStack"
import Feather from "@expo/vector-icons/Feather"
import { NativeStackScreenProps } from "@react-navigation/native-stack"

type Props = NativeStackScreenProps<AuthStackParamList, "Login">

const LoginScreen = ({ route, navigation }: Props) => {
  const openLoginForm = () => {
    navigation.navigate("LoginModal")
  }

  return (
    <SafeAreaContainer>
      <TopNavigationBar>
        <Text style={styles.skipButton}>Skip</Text>
      </TopNavigationBar>

      <Container>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Sign In</Text>
        <Text>Sign in to access more features!</Text>
      </Container>

      <Container style={{ marginTop: 24 }}>
        <GoogleAuthButton />
        <LinkedinAuthButton containerStyle={{ marginTop: 8 }} />

        <TextLine style={{ marginTop: 16 }}>or</TextLine>

        <InvertedAuthButton
          text="Continue with Email"
          icon={<Feather name="mail" size={20} />}
          containerStyle={{ marginTop: 16 }}
          touchableOptions={{
            onPress: openLoginForm,
          }}
        />
      </Container>
    </SafeAreaContainer>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  skipButton: {
    marginLeft: "auto",
  },

  container: {
    paddingHorizontal: 16,
  },
})
