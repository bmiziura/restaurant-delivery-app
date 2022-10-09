import Container from "@/components/layout/Container"
import SafeAreaContainer from "@/components/layout/SafeAreaContainer"
import { SearchInput } from "@/components/ui/input/Input"
import React from "react"

const HomeScreen = () => {
  return (
    <SafeAreaContainer>
      <Container>
        <SearchInput />
      </Container>
    </SafeAreaContainer>
  )
}

export default HomeScreen
