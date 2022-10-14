import { Feather } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import React, { ReactNode } from "react"
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from "react-native"
import Container from "../layout/Container"

interface HeaderProps {
  title?: string
  style?: ViewStyle | ViewStyle[] | any[]
  children?: ReactNode
}

const Header = ({ title, children, style }: HeaderProps) => {
  const navigation = useNavigation()

  return (
    <Container
      style={[
        { flexDirection: "row", paddingVertical: 8, alignItems: "center" },
        style,
      ]}
    >
      {navigation.canGoBack() && (
        <TouchableOpacity
          onPress={() => {
            navigation.goBack()
          }}
          style={{ paddingRight: 8 }}
        >
          <Feather name="chevron-left" size={32} />
        </TouchableOpacity>
      )}
      {title && <Text style={styles.title}>{title}</Text>}
      {children}
    </Container>
  )
}

export default Header

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
})
