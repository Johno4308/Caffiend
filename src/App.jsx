import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './components/Home'
import Layout from './components/Layout/index'
import Coffees from './components/Coffees'

import Data from '../src/Data/coffeesData'

function App() {

  const Coffee = Data.map( data => {
    return(
      <Route 
        path='/coffee' 
        element={
        <Coffees 
          key={data.id}
          data={data}
        />}
        />
    )
  })

  return (
    <>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />}/>
        {/* <Route path='/coffee' element={<Coffees />}/> */}
        {Coffee}
      </Route>
    </Routes>
    </>
  )
}

export default App
