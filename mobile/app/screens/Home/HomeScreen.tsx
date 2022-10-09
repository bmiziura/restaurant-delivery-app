import Container from "@/components/layout/Container"
import SafeAreaContainer from "@/components/layout/SafeAreaContainer"
import { SearchInput } from "@/components/ui/input/Input"
import { useAuth } from "@/contexts/AuthContext"
import { RootStackParamList } from "@/router/stacks/RootStack"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import React from "react"
import { Pressable, Text } from "react-native"

const HomeScreen = () => {
  const { user, signOut } = useAuth()

  const rootNavigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  const handleLogout = async () => {
    await signOut()

    rootNavigation.reset({
      index: 0,
      routes: [
        {
          name: "AuthStack",
        },
      ],
    })
  }

  return (
    <SafeAreaContainer>
      <Container>
        <SearchInput />
      </Container>

      {user && (
        <Container>
          <Text>{user.email}</Text>
          <Pressable onPress={handleLogout}>
            <Text>Log out</Text>
          </Pressable>
        </Container>
      )}
    </SafeAreaContainer>
  )
}

export default HomeScreen
