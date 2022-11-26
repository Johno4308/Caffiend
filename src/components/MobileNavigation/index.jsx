import { Link, NavLink } from 'react-router-dom';
import './index.scss'
import Logo from '../../assets/Images/logo-brown-trans.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPhone, faHandshake, faHome, faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

const MobileNavigation = () => {

//    const [open, setOpen] = useState(false);

    return(
        <div className='nav-bar-mobile'>
            {/* <FontAwesomeIcon 
                icon={faBars} 
                color="#684028" 
                className="hamburger"
                onClick={() => setOpen(!open)} 
            /> */}
            <Link className='logo' to='/'>
                <img src={Logo} alt='logo'/>
                <p alt='logo-text'>Caffiend</p>
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    <div>
                    <section>
                    <hr />
                    <FontAwesomeIcon icon={faHome} color="#684028" />
                    <p>Home</p> 
                    <hr />
                    </section>
                    </div>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="coffee-link" to="/coffee">
                    <div>
                    <section>
                    <hr />
                    <FontAwesomeIcon icon={faCoffee} color="#684028" />
                    <p>Coffees</p> 
                    <hr />
                    </section>
                    </div>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                    <div>
                    <section>
                    <hr />
                    <FontAwesomeIcon icon={faPhone} color="#684028" />
                    <p>Contact Us</p> {/*fa-phone*/}
                    <hr />
                    </section>
                    </div>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="acknowledge-link"to="/acknowledge">
                    <div>
                    <section>
                    <hr />
                    <FontAwesomeIcon icon={faHandshake} color="#684028" />
                    <p>Acknowledge</p> {/*fa-handshake-o*/}
                    <hr />
                    </section>
                    </div>
                </NavLink>
            </nav>
        </div>

    );
}


export default MobileNavigation