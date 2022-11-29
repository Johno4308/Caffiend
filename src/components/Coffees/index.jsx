import './index.scss'
import React, { useEffect } from 'react';
import { gsap } from 'gsap-trial'



const Coffees = (props) => {

    // useEffect(() => {
    //     gsap.to('img', { duration: 0.5, x: 60, opacity: 1})
    //     gsap.to('ul', { duration: 0.5, y: -60, opacity: 1})
    // })

    return(
        <div className='coffees-text-zone'>
            
            <h1>{props.data.title}</h1>
            <p> {props.data.description}</p>
            <section>
                <img src={`../src/assets/Images/${props.data.img}`} />
                <p>{props.data.ratio}</p>
                <p>{props.data.cup}</p>
            </section>
            <hr id='steps-line'/>
            <ul>
            {props.data.steps.map(step => <li key={step.idx}>{step.text}</li>)}    
            </ul>
            <hr id='steps-line'/>
        </div>

    )
}

export default Coffees





