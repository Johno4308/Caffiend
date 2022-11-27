import './index.scss'
import DesktopNavigation from '../DesktopNavigation/index' 
import MobileNavigation from '../MobileNavigation/index'
import CoffeeMobileNavigation from '../CoffeeMobileNavigation/index'
import CoffeeDesktopNavigation from '../CoffeeDesktopNavigation'
import { Outlet } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'


const Layout = () => {

    const [open, setOpen] = useState(false);
    const [openList, setOpenList] = useState(false);

    const hambugerIcon = <FontAwesomeIcon 
                            icon={faBars} 
                            color="#684028" 
                            className="hamburger"
                            onClick={() => setOpen(!open)} 
                        />

    const closeIcon = <FontAwesomeIcon 
                        icon={faClose} 
                        color="#684028" 
                        className="hamburger"
                        onClick={() => setOpen(!open)} 
                    />
    
    const coffeHambugerIcon = <FontAwesomeIcon 
                    icon={faBars} 
                    color="#684028" 
                    className="coffeehamburger"
                    onClick={() => setOpenList(!openList)} 
                />

    const coffeesIcon = <FontAwesomeIcon 
                icon={faCoffee} 
                color="#684028" 
                className="coffeeIcon"
            />

    const closeIcon1 = <FontAwesomeIcon 
            icon={faClose} 
            color="#684028" 
            className="coffeehamburger"
            onClick={() => setOpenList(!openList)} 
        />
    return(
    <div>
        <div className='coffee-ham-div'>
            <p>other </p>
            {coffeesIcon}
            {openList ? closeIcon1 : coffeHambugerIcon} 
            {openList && <CoffeeMobileNavigation />}
        </div>

        <CoffeeDesktopNavigation />

        <div className='hamburger-div'>
        {open ? closeIcon : hambugerIcon}

        {open && <MobileNavigation />}
        </div>

        <DesktopNavigation />
        <Outlet />
    </div>
    )
}

export default Layout