import React from "react"
import { StyleSheet, View } from "react-native"

import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Colors } from "react-native/Libraries/NewAppScreen"
import { ContainerProps } from "./Container"

type SafeAreaContainerProps = ContainerProps

const SafeAreaContainer = ({ style, children }: SafeAreaContainerProps) => {
  const { top, right, bottom, left } = useSafeAreaInsets()
  return (
    <View
      style={[
        {
          marginTop: top,
          marginRight: right,
          marginBottom: bottom,
          marginLeft: left,
        },
        styles.container,
        style,
      ]}
    >
      {children}
    </View>
  )
}

export default SafeAreaContainer

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: Colors.white,
  },
})
