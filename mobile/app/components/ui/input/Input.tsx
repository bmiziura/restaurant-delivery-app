import Colors from "@/theme/Colors"
import React, { ReactNode, useRef } from "react"
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from "react-native"

import Feather from "@expo/vector-icons/Feather"
import { useState } from "react"

interface InputProps {
  label?: string
  labelStyle?: TextStyle | TextStyle[] | any[]

  style?: ViewStyle | ViewStyle[] | any[]

  containerStyle?: ViewStyle | ViewStyle[] | any[]

  inputOptions?: TextInputProps

  children?: ReactNode
}

const Input = ({
  label,
  labelStyle,
  style,
  containerStyle,
  inputOptions,
  children,
}: InputProps) => {
  const inputRef = useRef<TextInput>({} as TextInput)

  const focusInput = () => {
    if (inputRef) {
      inputRef.current?.focus()
    }
  }

  return (
    <View style={style}>
      {label && (
        <Text style={[styles.label, labelStyle]} onPress={focusInput}>
          {label}
        </Text>
      )}

      <View style={[styles.inputContainer, containerStyle]}>
        <TextInput style={styles.input} {...inputOptions} ref={inputRef} />

        {children}
      </View>
    </View>
  )
}

export const PasswordInput = (props: InputProps) => {
  const [isHidden, setHidden] = useState(true)

  const handlePress = () => {
    setHidden(!isHidden)
  }

  return (
    <Input
      label="Password"
      {...props}
      inputOptions={{
        secureTextEntry: isHidden,
        textContentType: "password",
        placeholder: "Password",
        ...props.inputOptions,
      }}
    >
      <Pressable onPress={handlePress} style={styles.passwordBtn}>
        <Feather name={isHidden ? "eye" : "eye-off"} size={16} />
      </Pressable>
    </Input>
  )
}

export default Input

const styles = StyleSheet.create({
  label: {
    marginBottom: 4,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: Colors.white,

    borderColor: Colors.lightGray,
    borderWidth: 2,

    paddingVertical: 5,
    paddingHorizontal: 10,

    borderRadius: 3,
  },

  input: {
    flex: 1,
  },

  passwordBtn: {
    marginLeft: 8,
  },
})
