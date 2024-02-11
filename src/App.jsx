import { BrowserRouter, Route, Router, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import { Home, Dashboard, Signup, Signin, SendMoney, Profile } from "./pages/index"
import { useEffect } from "react"
import axios from "axios"
import { apiUrl } from "./api"

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" >
        <Route path="" element={<Home />} />
        <Route path="signup" element={<Signup />} />
        <Route path="signin" element={<Signin />} />
        <Route path="profile" element={<Profile />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="sendmoney" element={<SendMoney />} />
      </Route>
    )
  )

  useEffect(()=>{
    axios.get(`${apiUrl}`)
    .then(() => console.log("backend is up"))
    .catch((err) => console.log(err));
  }, [])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
