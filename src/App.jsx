
import Navbar from "./Components/Navbar"
import AboutUs from "./Pages/AboutUs"
import Home from "./Pages/Home"
import NotFound from "./Pages/NotFound"
import Services from "./Pages/Services"
import UserDetails from "./Pages/UserDetails"
import Users from "./Pages/Users"
import {Routes,Route } from "react-router-dom"


function App() {
 

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />
      <Route path="/user/:id" element={<UserDetails />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="*" element={<NotFound />} />

    </Routes>
    </>

    
  )
}

export default App
