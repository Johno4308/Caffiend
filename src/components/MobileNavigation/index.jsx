import { Link, NavLink } from 'react-router-dom';
import './index.scss'
import Logo from '../../assets/Images/logo-brown-trans.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPhone, faHandshake, faHome } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react';
import { gsap } from 'gsap-trial'

const MobileNavigation = () => {

    useEffect(() => {
        gsap.to('.sec1', { delay: 0.0, duration: 0.5, x: -100, opacity: 1})
        gsap.to('.sec2', { delay: 0.2, duration: 0.5, x: -100, opacity: 1})
        gsap.to('.sec3', { delay: 0.4, duration: 0.5, x: -100, opacity: 1})
        gsap.to('.sec4', { delay: 0.6, duration: 0.5, x: -100, opacity: 1})
    })

    return(
        <div className='nav-bar-mobile'>
            <Link className='logo' to='/'>
                <img src={Logo} alt='logo'/>
                <p alt='logo-text'>Caffiend</p>
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    <div>
                    <section className='sec1'>
                    <hr />
                    <FontAwesomeIcon icon={faHome} color="#684028" />
                    <p>Home</p> 
                    <hr />
                    </section>
                    </div>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="coffee-link" to="/coffee">
                    <div>
                    <section className='sec2'>
                    <hr />
                    <FontAwesomeIcon icon={faCoffee} color="#684028" />
                    <p>Coffees</p> 
                    <hr />
                    </section>
                    </div>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                    <div>
                    <section className='sec3'>
                    <hr />
                    <FontAwesomeIcon icon={faPhone} color="#684028" />
                    <p>Contact Us</p> {/*fa-phone*/}
                    <hr />
                    </section>
                    </div>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="acknowledge-link"to="/acknowledge">
                    <div>
                    <section className='sec4'> 
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