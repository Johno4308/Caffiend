import './index.scss'
import Espresso from '../../assets/Images/espresso.png'

const Coffees = () => {
    return(
        <div>
            <h1>Espresso</h1>
            <img src={Espresso} width="200px"/>
            <p> The espresso, also known as a short black, 
                is approximately 1 oz. of highly concentrated coffee. 
                Although simple in appearance, it can be difficult to master.
                </p>
            
            <ul>
                <li>Clean your portafilter.</li>
                <li>Dose correctly.</li>
                <li>Distribute your grounds in the portafilter.</li>
                <li>Tamp evenly and consistently.</li>
                <li>Rinse your group head.</li>
                <li>Insert the portafilter and start brewing immediately.</li>
                <li>Be aware of the yield & brew time.</li>
                <li>Serve with a smile.</li>
            </ul>

        </div>

    )
}

export default Coffees