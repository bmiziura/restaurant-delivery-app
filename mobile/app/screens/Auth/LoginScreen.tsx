import React, { useEffect } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

import SafeAreaContainer from "@/components/layout/SafeAreaContainer"
import {
  GoogleAuthButton,
  InvertedAuthButton,
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

import { useAuth } from "@/contexts/AuthContext"
import * as Google from "expo-auth-session/providers/google"
import { GoogleAuthProvider } from "firebase/auth/react-native"

import JobHuntImage from "@/assets/undraw/job_hunt.svg"

type Props = NativeStackScreenProps<AuthStackParamList, "Login">

const LoginScreen = ({ route, navigation }: Props) => {
  const { signInWithCredential } = useAuth()

  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId:
      "592110194825-nn3q1unr3h1b9uvki2lg8f30amnihjk5.apps.googleusercontent.com",
  })

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

  useEffect(() => {
    const checkResponse = async () => {
      if (response?.type === "success") {
        const { id_token } = response.params
        const credential = GoogleAuthProvider.credential(id_token)

        try {
          await signInWithCredential(credential)

          rootNavigation.reset({
            index: 0,
            routes: [
              {
                name: "HomeStack",
              },
            ],
          })
        } catch (err: any) {}
      }
    }

    checkResponse()
  }, [response])

  const logInWithGoogle = async () => {
    if (!request) return

    await promptAsync()
  }

  return (
    <SafeAreaContainer>
      <TopNavigationBar>
        <TouchableOpacity style={styles.skipButton} onPress={skipLogin}>
          <Text style={styles.skipButtonText}>Skip</Text>
        </TouchableOpacity>
      </TopNavigationBar>

      <Container style={{ flex: 1 }}>
        <JobHuntImage width="100%" height="100%" />
      </Container>

      <View style={{ flex: 1.5 }}>
        <Container>
          <Text style={{ fontSize: 24, fontWeight: "bold" }}>
            Sign In to get more chance in landing your favourite job!
          </Text>
          <Text>Sign in to access more features!</Text>
        </Container>

        <Container style={{ marginTop: 24 }}>
          <GoogleAuthButton
            touchableOptions={{
              onPress: logInWithGoogle,
            }}
          />

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
      </View>
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
