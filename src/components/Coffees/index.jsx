import './index.scss'
import React from 'react';
import image from `../../assets/Images${props.data.img}`


const Coffees = (props) => {

    return(
        <div className='coffees-text-zone'>
            
            <h1>{props.data.title}</h1>
            <p> {props.data.description}</p>
            <section>
                <div style={{backgroundImage: image}}></div>
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

{/* <img src={`../../src/Images/${props.data.img}`} /> */}





