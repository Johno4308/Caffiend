import { NavLink } from 'react-router-dom'
import Coffees from '../Coffees'
import CoffeeList from '../../Data/coffeesData'
import './index.scss'
import Data from '../../Data/coffeesData'
import { Route, Routes } from 'react-router-dom'

const CoffeeDesktopNavigation = (props) => {
    function handleClick(){
      console.log(props.data.id)
    }


    const Coffee1 = () => {
      return(
        <Route 
        path='/coffee' 
        key={Data}
        element={
        <Coffees 
          key={Data[1].id}
          data={Data[1]}
        />}
        />
      )
    }

    const Coffee = Data.map( data => {
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

    console.log(Coffee1)

    const CoffeeItem = CoffeeList.map( data => {
      return(
        <>
        <Routes>
          {Coffee1}
        </Routes>
      </>
    )})

    return(
      <NavLink onClick={handleClick} exact="true" activeclassname="active" className="coffee-nav" to="/coffee">
        <section className='coffeeDesktopNav'>  
          <li key={props.data.id} onClick={props.toggle}> 
          {props.data.title}
          {CoffeeItem}
          </li>
        </section>
      </NavLink>
    )
}

export default CoffeeDesktopNavigation





