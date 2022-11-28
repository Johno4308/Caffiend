import { NavLink } from 'react-router-dom'
import './index.scss'

const CoffeeMobileNavigation = (props) => {
    return(
      <NavLink onClick={props.toggle && props.close} exact="true" activeclassname="active" to="/coffee">
        <section className='coffeeNav'>  
          <li key={props.data.id} onClick={props.toggle}> 
          {props.data.title}
          </li>
        </section>
      </NavLink>
    )
}

export default CoffeeMobileNavigation


