import './index.scss'
import DesktopNavigation from '../DesktopNavigation/index' 
import MobileNavigation from '../MobileNavigation/index'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return(
    <>
        <DesktopNavigation />
        {/*<MobileNavigation />*/}
        <Outlet />
    </>
    )
}

export default Layout