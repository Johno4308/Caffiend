import { NavLink } from 'react-router-dom'
import './index.scss'


const CoffeeDesktopNavigation = (props) => {

    return(
      <>
      <NavLink onClick={props.toggle} exact="true" activeclassname="active" className="coffee-nav" to="/coffee">
        <section className='coffeeDesktopNav'>  
          <li key={props.data.id} onClick={props.toggle}> 
          {props.data.title}
          </li>
        </section>
      </NavLink>
      </>
    )
}

export default CoffeeDesktopNavigation



