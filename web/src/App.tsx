import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AuthContextProvider from "./contexts/AuthContext"
import HomePage from "./pages/HomePage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
])

function App() {
  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  )
}

export default App
