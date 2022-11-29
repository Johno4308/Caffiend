import './index.scss'
import DesktopNavigation from '../DesktopNavigation/index' 
import MobileNavigation from '../MobileNavigation/index'
import { Outlet } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'


const Layout = () => {

    const [open, setOpen] = useState(false);


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

        {open && <MobileNavigation close={() => setOpen()}/>}
        </div>

        <DesktopNavigation />
        <Outlet />
    </div>
    )
}

export default Layout