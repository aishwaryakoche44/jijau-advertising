import React from 'react'

import Navbar from './Navbar'



import Contact from './Pages/Contact'
import Home from './Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Work from './Pages/Work'
import Footer from './Footer'
import About from './Pages/About'
import Services from './Pages/Services'

const App = () => {
  return (
    <div className="">
<BrowserRouter>
   <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/work" element={<Work/>} />
          <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer/>
  </BrowserRouter>
      
    </div>
   
  )
}

export default App

