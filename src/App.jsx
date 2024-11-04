import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import React from 'react'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import RepairContact from './pages/RepairContact'
import Contact from './pages/Contact'

function App() {

  return (
    <>
      <Routes>
          <Route path="/" element={  <Home /> } />
          <Route path="/about" element={  <About/> } />
          <Route path="/repair" element={ <RepairContact/> } />
          <Route path='/contact' element={ <Contact/>} />
      </Routes>
    </>
  )
}

export default App
