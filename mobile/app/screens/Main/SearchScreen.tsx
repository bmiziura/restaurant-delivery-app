import Container from "@/components/layout/Container"
import SafeAreaContainer from "@/components/layout/SafeAreaContainer"
import Header from "@/components/ui/Header"
import { SearchInput } from "@/components/ui/input/Input"
import { MainStackParamList } from "@/router/stacks/Main/MainStack"
import Colors from "@/theme/Colors"
import { Feather } from "@expo/vector-icons"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import React, { useState } from "react"
import { ScrollView, StyleSheet, Text, View } from "react-native"

type Props = NativeStackScreenProps<MainStackParamList, "Search">

const SearchScreen = ({ route }: Props) => {
  const { text = "", focus = false } = route.params

  const [searchText, setSearchText] = useState(text)

  return (
    <SafeAreaContainer>
      <Header>
        <SearchInput
          style={{ flex: 1 }}
          inputOptions={{
            placeholder: "Search",
            value: searchText,
            onChangeText: (text) => {
              setSearchText(text)
            },
            autoFocus: focus,
          }}
        />
        <View
          style={{
            marginLeft: 8,
          }}
        >
          <Feather name="grid" size={24} />
        </View>
      </Header>

      <Container style={{ marginBottom: 8 }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Text
            style={{
              backgroundColor: Colors.lightGray,
              padding: 4,
              marginHorizontal: 4,
              borderRadius: 100,
            }}
          >
            Hello world
          </Text>
          <Text
            style={{
              backgroundColor: Colors.lightGray,
              padding: 4,
              marginHorizontal: 4,
              borderRadius: 100,
            }}
          >
            Hello world
          </Text>
          <Text
            style={{
              backgroundColor: Colors.lightGray,
              padding: 4,
              marginHorizontal: 4,
              borderRadius: 100,
            }}
          >
            Hello world
          </Text>
          <Text
            style={{
              backgroundColor: Colors.lightGray,
              padding: 4,
              marginHorizontal: 4,
              borderRadius: 100,
            }}
          >
            Hello world
          </Text>
          <Text
            style={{
              backgroundColor: Colors.lightGray,
              padding: 4,
              marginHorizontal: 4,
              borderRadius: 100,
            }}
          >
            Hello world
          </Text>
        </ScrollView>
      </Container>

      <ScrollView style={{ backgroundColor: Colors.lightGray, flex: 1 }}>
        <Text>Hello world</Text>
      </ScrollView>
    </SafeAreaContainer>
  )
}

export default SearchScreen

const styles = StyleSheet.create({})
