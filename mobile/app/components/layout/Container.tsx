import React, { ReactNode } from "react"
import { StyleSheet, View, ViewStyle } from "react-native"

export interface ContainerProps {
  style?: ViewStyle | ViewStyle[] | any[]
  children: ReactNode
}

const Container = ({ style, children }: ContainerProps) => {
  return <View style={[styles.container, style]}>{children}</View>
}

export default Container

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
})
