import { Link } from 'react-router-dom';
import './index.scss'
import Logo from '../../assets/Images/logo-brown-trans.png'

const DesktopNavigation = () => {
    return(
        <nav className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={Logo} alt='logo'/>
                <p alt='logo-text'>Caffiend</p>
            </Link>
        </nav>
    );
}

export default DesktopNavigation