import { useState } from 'react'
import './index.scss'

const CoffeeMobileNavigation = (props) => {
   // const [click, setclick] = useState(false);
   // const handleClick = () =>setclick(!click);

    return(
        <section className='coffeeNav'>  
          <li key={props.data.id}> 
          {props.data.title}
          </li>
        </section>
    )
}

export default CoffeeMobileNavigation


/*
function Dropdown(props) {									this is my coffee nav bar desktop
  const [click, setClick] = useState(false);		
  const handleClick = () => setClick(!click);

  return (
    <ul
      onClick={handleClick}
      className={click ? "dropdown-menu clicked" : "dropdown-menu"}
    >
      {props.submenus.map((subNav, index) => (
        <li key={index} className="dropdown-links">
          <Link
            className={subNav.cName}
            to={subNav.path}
            onClick={() => setClick(false)}
          >
            {subNav.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
*/