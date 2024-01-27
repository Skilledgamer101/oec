import { useState } from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Team from './components/Team'
import Practice from './components/Practice'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <About />
      <Practice/>
      <Team />
      <Footer />
    </>
  )
}

export default App
