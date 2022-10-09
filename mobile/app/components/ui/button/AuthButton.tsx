import React, { ReactElement } from "react"
import { StyleSheet } from "react-native"

import Button, {
  ButtonProps,
  ButtonText,
  InvertedButton,
  InvertedButtonText,
} from "./Button"

import GoogleIcon from "@/assets/icons/google.svg"
import LinkedinIcon from "@/assets/icons/linkedin.svg"
import Colors from "@/theme/Colors"

type AuthButtonProps = ButtonProps & {
  icon?: ReactElement
}

const AuthButton = (props: AuthButtonProps) => {
  const { containerStyle, textStyle, text, icon } = props

  return (
    <Button
      {...props}
      containerStyle={[styles.container, containerStyle]}
      textStyle={[styles.text, textStyle]}
    >
      {icon && icon}
      <ButtonText style={[styles.text, textStyle]}>{text}</ButtonText>
    </Button>
  )
}

export const InvertedAuthButton = (props: AuthButtonProps) => {
  const { containerStyle, textStyle, text, icon } = props

  return (
    <InvertedButton
      {...props}
      containerStyle={[styles.container, containerStyle]}
      textStyle={[styles.text, textStyle]}
    >
      {icon && icon}
      <InvertedButtonText style={[styles.text, textStyle]}>
        {text}
      </InvertedButtonText>
    </InvertedButton>
  )
}

export const GoogleAuthButton = (props: AuthButtonProps) => {
  return (
    <InvertedAuthButton
      {...props}
      text="Continue with Google"
      icon={<GoogleIcon width={20} height={20} />}
    />
  )
}

export const LinkedinAuthButton = (props: AuthButtonProps) => {
  return (
    <InvertedAuthButton
      {...props}
      text="Continue with LinkedIn"
      icon={<LinkedinIcon width={20} height={20} />}
    />
  )
}

export default AuthButton

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",

    justifyContent: "space-between",
  },

  text: {
    color: Colors.primary,
    marginRight: "auto",
    marginLeft: "auto",
  },
})
