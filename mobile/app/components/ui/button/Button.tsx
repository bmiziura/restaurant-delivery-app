import Colors from "@/theme/Colors"
import React, { ReactNode } from "react"
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native"

export interface ButtonProps {
  text?: string

  containerStyle?: ViewStyle | TextStyle[] | any[]
  textStyle?: TextStyle | TextStyle[] | any[]

  children?: ReactNode
}

const Button = ({
  text = "",
  containerStyle,
  textStyle,
  children,
}: ButtonProps) => {
  return (
    <TouchableOpacity style={[styles.container, containerStyle]}>
      {children ?? <ButtonText style={textStyle}>{text}</ButtonText>}
    </TouchableOpacity>
  )
}

export const ButtonText = ({
  style,
  children,
}: {
  style?: TextStyle | TextStyle[] | any[]
  children: ReactNode
}) => {
  return <Text style={[styles.text, style]}>{children}</Text>
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

    paddingHorizontal: 16,

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
