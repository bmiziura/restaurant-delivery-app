import AuthContextProvider from "@/contexts/AuthContext"
import Router from "./app/router/Router"

export default function App() {
  return (
    <AuthContextProvider>
      <Router />
    </AuthContextProvider>
  )
}
