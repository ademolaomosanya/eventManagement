import React from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  CreateEventPage,
  Facilities,
  Signin,
  Signup,

} from "./components/App";


const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Facilities" element={<Facilities />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/CreateEventPage" element={<CreateEventPage />} />
      </Routes>
      
      <Footer />
      </Router>
    
    
  </>


)

