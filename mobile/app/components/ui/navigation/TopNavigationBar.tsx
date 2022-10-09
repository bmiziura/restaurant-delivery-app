import React, { ReactNode } from "react"
import { StyleSheet, TouchableOpacity, ViewStyle } from "react-native"

import Container from "@/components/layout/Container"
import Feather from "@expo/vector-icons/Feather"
import { useNavigation } from "@react-navigation/native"

interface TopNavigationBarProps {
  style?: ViewStyle | ViewStyle[] | any[]

  children?: ReactNode
}

const TopNavigationBar = ({ style, children }: TopNavigationBarProps) => {
  const navigation = useNavigation()

  const handleBackButton = () => {
    navigation.goBack()
  }

  return (
    <Container style={[styles.container, style]}>
      {navigation.canGoBack() && (
        <TouchableOpacity onPress={handleBackButton}>
          <Feather name="chevron-left" size={24} />
        </TouchableOpacity>
      )}

      {children}
    </Container>
  )
}

export default TopNavigationBar

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,

    flexDirection: "row",

    justifyContent: "space-between",
  },

  icon: {},
})
