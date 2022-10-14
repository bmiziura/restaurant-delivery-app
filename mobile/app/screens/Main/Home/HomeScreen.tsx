import Container from "@/components/layout/Container"
import SafeAreaContainer from "@/components/layout/SafeAreaContainer"
import { SearchInput } from "@/components/ui/input/Input"
import Section from "@/components/ui/Section"
import { useAuth } from "@/contexts/AuthContext"
import { RootStackParamList } from "@/router/stacks/RootStack"
import Colors from "@/theme/Colors"
import { Feather } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import React from "react"
import { Image, ScrollView, TouchableOpacity, View } from "react-native"

const Header = () => {
  const { user } = useAuth()

  const userImage = user
    ? { uri: user.photoURL }
    : require("@/assets/user-icon.png")

  const rootNavigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  return (
    <Container style={{ marginVertical: 8 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            if (!user) {
              rootNavigation.navigate("AuthStack", {
                screen: "Login",
              })
            } else {
              console.log("Open drawer")
            }
          }}
          style={{
            backgroundColor: Colors.lightGray,
            borderRadius: 100,
            padding: 5,
          }}
        >
          <Image
            source={userImage}
            style={{ width: 40, height: 40 }}
            borderRadius={100}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            rootNavigation.navigate("MainStack", {
              screen: "Notifications",
            })
          }
        >
          <Feather name="bell" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 16 }}>
        <SearchInput
          inputOptions={{
            placeholder: "Search",
            onEndEditing: (event) => {
              rootNavigation.navigate("MainStack", {
                screen: "Search",
                params: {},
              })
            },
          }}
        />
      </View>
    </Container>
  )
}

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
      <Header />

      <ScrollView style={{ flex: 1, backgroundColor: Colors.lightGray }}>
        <Section title="Suggested Jobs"></Section>
        <Section title="Recent Jobs"></Section>
      </ScrollView>
    </SafeAreaContainer>
  )
}

export default HomeScreen
