import React, { useEffect } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

import SafeAreaContainer from "@/components/layout/SafeAreaContainer"

import { AuthStackParamList } from "@/router/stacks/Auth/AuthStack"
import { useNavigation } from "@react-navigation/native"
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack"

import { useAuth } from "@/contexts/AuthContext"
import * as Google from "expo-auth-session/providers/google"
import { GoogleAuthProvider } from "firebase/auth/react-native"

import Container from "@/components/layout/Container"
import TopNavigationBar from "@/components/ui/navigation/TopNavigationBar"
import { RootStackParamList } from "@/router/stacks/RootStack"
import Colors from "@/theme/Colors"

import JobHuntImage from "@/assets/undraw/job_hunt.svg"
import {
  GoogleAuthButton,
  InvertedAuthButton,
} from "@/components/ui/button/AuthButton"
import TextLine from "@/components/ui/textline/TextLine"

import Feather from "@expo/vector-icons/Feather"

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
    rootNavigation.navigate("MainStack", {
      screen: "HomeStack",
      params: {
        screen: "Home",
      },
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
                name: "MainStack",
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
    <SafeAreaContainer
      style={{
        backgroundColor: Colors.lightGray,
      }}
    >
      <View
        style={{
          flex: 1,
        }}
      >
        <TopNavigationBar>
          <TouchableOpacity style={styles.skipButton} onPress={skipLogin}>
            <Text style={styles.skipButtonText}>Skip</Text>
          </TouchableOpacity>
        </TopNavigationBar>

        <Container style={{ flex: 0.75 }}>
          <JobHuntImage width="100%" height="100%" />
        </Container>
      </View>
      <View
        style={{
          flex: 2,
          backgroundColor: Colors.white,

          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}
      >
        <Container style={{ marginTop: 16 }}>
          <View style={{ marginVertical: 32 }}>
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>
              Sign In to get more chance in landing your favourite job!
            </Text>
            <Text>Sign in to access more features!</Text>
          </View>

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
      {/* <TopNavigationBar>
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
      </View> */}
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
