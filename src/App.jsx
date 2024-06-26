import React from 'react'
import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import About from './pages/about/About'
import Portfolio from './pages/Portfolio/Portfolio'
import Header from './sections/header/header'
import { Footer } from 'flowbite-react'

const App = () => {
  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
        

      </Routes>
      <Footer/>
    </>

  )
}

export default App