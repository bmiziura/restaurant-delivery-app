import React, { ReactNode } from "react"
import { StyleSheet, Text, ViewStyle } from "react-native"
import Container from "../layout/Container"

const Section = ({
  title,
  containerStyle,
  titleStyle,
  children,
}: {
  title?: string
  containerStyle?: ViewStyle | ViewStyle[] | any[]
  titleStyle?: ViewStyle | ViewStyle[] | any[]
  children?: ReactNode
}) => {
  return (
    <Container style={[styles.container, containerStyle]}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>

      {children}
    </Container>
  )
}

export default Section

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
})
