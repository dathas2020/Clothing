import { useState } from 'react'
import './App.css'
import Head from './Components/Head'
import Item from './Components/Item'
import LoginPage from './Components/LoginPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Hoodies from './Components/Hoodies'
import OverSizedTees from './Components/OverSizedTees'
import SweatPants from './Components/SweatPants'
import AboutUs from './Components/AboutUs'
import Search from './Components/Search'
import Cart from './Components/Cart'
import Input from './Components/Input'
import Footer from './Components/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
        <Head />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/hoodies' element={<Hoodies />} />
          <Route path='/oversizedtees' element={<OverSizedTees />} />
          <Route path='/sweatpants' element={<SweatPants />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/input' element={<Input />} />

          <Route path='/item/:id' element={<Item />} />

          <Route path='/login' element={<LoginPage />} />
          <Route path='/search' element={<Search />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;
