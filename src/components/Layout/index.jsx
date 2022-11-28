import './index.scss'
import DesktopNavigation from '../DesktopNavigation/index' 
import MobileNavigation from '../MobileNavigation/index'
import CoffeeMobileNavigation from '../CoffeeMobileNavigation/index'
import CoffeeDesktopNavigation from '../CoffeeDesktopNavigation'
import { Outlet } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import Data from '../../Data/coffeesData'


const Layout = () => {

    const [open, setOpen] = useState(false);
    // const [openList, setOpenList] = useState(false);

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
    

    return(
    <div>
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