import Colors from "@/theme/Colors"
import React, { ReactElement } from "react"
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native"

type ButtonProps = {
  text?: string
  icon?: ReactElement

  containerStyle?: ViewStyle | TextStyle[] | any[]
  textStyle?: TextStyle | TextStyle[] | any[]
}

const Button = ({
  text = "",
  icon,
  containerStyle,
  textStyle,
}: ButtonProps) => {
  return (
    <TouchableOpacity style={[styles.container, containerStyle]}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  )
}

export const InvertedButton = (props: ButtonProps) => {
  const { containerStyle, textStyle } = props

  return (
    <Button
      {...props}
      containerStyle={[styles.invertedContainer, containerStyle]}
      textStyle={[styles.invertedText, textStyle]}
    />
  )
}

export default Button

const styles = StyleSheet.create({
  // Normal Button
  container: {
    width: "100%",

    padding: 8,

    justifyContent: "center",
    alignItems: "center",

    backgroundColor: Colors.accent,

    borderRadius: 7,
  },

  text: {
    color: Colors.white,

    fontWeight: "bold",
  },

  // Inverted Button
  invertedContainer: {
    backgroundColor: Colors.white,

    borderWidth: 1,
    borderColor: Colors.accent,
  },

  invertedText: {
    color: Colors.accent,
  },
})
