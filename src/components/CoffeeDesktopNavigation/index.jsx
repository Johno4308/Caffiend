import { NavLink } from 'react-router-dom'
import './index.scss'


const CoffeeDesktopNavigation = (props) => {
    // function handleClick(){
    //   console.log(props.data.id)
    // }


    return(
      <NavLink onClick={props.toggle} exact="true" activeclassname="active" className="coffee-nav" to="/coffee">
        <section className='coffeeDesktopNav'>  
          <li key={props.data.id} onClick={props.toggle}> 
          {props.data.title}
          </li>
        </section>
      </NavLink>
    )
}

export default CoffeeDesktopNavigation


//TOMORROW
  // SET UP TV
  // LOG SCRIMBA
  // LOOK AT CODE
  // THE TEXT AREA IS THE COMPONENT
  // THE NAV BAR IS THE LIST
  // WORK FROM THERE


