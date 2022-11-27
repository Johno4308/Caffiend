import { NavLink } from 'react-router-dom'
import Coffees from '../Coffees'
import CoffeeList from '../../Data/coffeesData'
import './index.scss'


const CoffeeDesktopNavigation = (props) => {
    function handleClick(){
      console.log(props.data.id)
    }

    //maybe work here.. coffee here has a classname and takes over the zindex if bool is clicked

    // const styles = {
    //   zIndex: props.show ? 3 : 1
    // }
    
    const CoffeeItem = CoffeeList.map( data => {
      return(
      <NavLink exact="true" activeclassname="active"  to="/coffee">
          <Coffees 
          key={data.id}
          data={data}/>
      </NavLink>
    )})


    return(
      <NavLink  exact="true" activeclassname="active" className="coffee-nav" to="/coffee">
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





