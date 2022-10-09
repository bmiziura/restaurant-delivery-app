import React from "react"
import { StyleSheet, Text, TouchableOpacity } from "react-native"

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
import { RootStackParamList } from "@/router/stacks/RootStack"
import Feather from "@expo/vector-icons/Feather"
import { useNavigation } from "@react-navigation/native"
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack"

type Props = NativeStackScreenProps<AuthStackParamList, "Login">

const LoginScreen = ({ route, navigation }: Props) => {
  const openLoginForm = () => {
    navigation.navigate("LoginModal")
  }

  const rootNavigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  const skipLogin = () => {
    rootNavigation.navigate("HomeStack", {
      screen: "Home",
    })
  }

  return (
    <SafeAreaContainer>
      <TopNavigationBar>
        <TouchableOpacity style={styles.skipButton} onPress={skipLogin}>
          <Text style={styles.skipButtonText}>Skip</Text>
        </TouchableOpacity>
      </TopNavigationBar>

      <Container>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>
          Sign In to get more chance in landing your favourite job!
        </Text>
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

  skipButtonText: {
    textDecorationLine: "underline",
  },

  container: {
    paddingHorizontal: 16,
  },
})
