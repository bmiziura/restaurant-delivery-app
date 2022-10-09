import Colors from "@/theme/Colors"
import React, { ReactNode } from "react"
import { StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native"

interface TextLineProps {
  style?: ViewStyle | ViewStyle[] | any[]

  textStyle?: TextStyle | TextStyle[] | any[]

  lineStyle?: ViewStyle | ViewStyle[] | any[]

  children?: ReactNode
}

const TextLine = ({ style, textStyle, lineStyle, children }: TextLineProps) => {
  return (
    <View style={[styles.container, style]}>
      <View style={[styles.line, lineStyle]}></View>
      {children && <Text style={[styles.text, textStyle]}>{children}</Text>}
      <View style={[styles.line, lineStyle]}></View>
    </View>
  )
}

export default TextLine

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },

  line: {
    flex: 1,

    backgroundColor: Colors.primaryLight,

    height: 1,
  },

  text: {
    paddingHorizontal: 8,

    fontWeight: "200",
  },
})
