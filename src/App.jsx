import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './components/Home'
import Layout from './components/Layout/index'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
