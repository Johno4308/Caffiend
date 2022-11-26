import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './components/Home'
import Layout from './components/Layout/index'
import Coffees from './components/Coffees'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path='/coffee' element={<Coffees />}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
