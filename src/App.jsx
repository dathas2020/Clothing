import { useState } from 'react'
import './App.css'
import Head from './Components/Head'
import Item from './Components/Item'
import LoginPage from './Components/LoginPage'
import { Routes,Route } from 'react-router-dom'
import Home from './Components/Home'
import Hoodies from './Components/Hoodies'
import OverSizedTees from './Components/OverSizedTees'
import SweatPants from './Components/SweatPants'
import AboutUs from './Components/AboutUs'
import Search from './Components/Search'
import Cart from './Components/Cart'

function App() {

  return (
    <>
      <Head/>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/hoodies' element={<Hoodies/>} />
        <Route path='/oversizedtees' element={<OverSizedTees/>} />
        <Route path='/sweatpants' element={<SweatPants/>} />
        <Route path='/aboutus' element={<AboutUs/>} />
        <Route path='/item' element={<Item/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/search' element={<Search/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
      
    </>
  )
}

export default App
