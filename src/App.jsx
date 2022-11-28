import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './components/Home'
import Layout from './components/Layout/index'
import Coffees from './components/Coffees'
import CoffeeDesktopNavigation from './components/CoffeeDesktopNavigation/index'

import Data from '../src/Data/coffeesData'

function App() {
  const [coffeeList, setCoffeeList] = useState(Data)

  console.log(coffeeList)

  function toggle(idx){
    // console.log(idx)
    setCoffeeList(listItems => {
      const newArray = []
      for(let i = 0; i < listItems.length; i++){
        const listItem = listItems[i]
        if(listItem.id === idx){
          newArray.unshift(listItem)
        }else{

          newArray.push(listItem)
        }
      }
      return newArray
    })
  }

  const Coffee = coffeeList.map( data => {
    return(
      <Route 
        path='/coffee' 
        key={data}
        element={
        <Coffees 
          key={data.id}
          data={data}
        />}
        />
    )
  })

  const DesktopNav = Data.map(data1 => (
    <CoffeeDesktopNavigation 
      key={data1.id}
      data={data1}
      toggle={() => toggle(data1.id)}
    />
))



  return (
    <>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />}/>
        {Coffee}

      </Route>
    </Routes>
    {DesktopNav}

    </>
  )
}

export default App
