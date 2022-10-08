import React, { ReactNode } from "react"
import { View } from "react-native"

import { useSafeAreaInsets } from "react-native-safe-area-context"

const SafeAreaContainer = ({ children }: { children: ReactNode }) => {
  const { top, right, bottom, left } = useSafeAreaInsets()
  return (
    <View
      style={{
        flex: 1,
        marginTop: top,
        marginRight: right,
        marginBottom: bottom,
        marginLeft: left,
      }}
    >
      {children}
    </View>
  )
}

export default SafeAreaContainer
