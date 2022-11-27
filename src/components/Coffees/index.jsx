import React from 'react'
import './index.scss'



const Coffees = (props) => {

    //console.log(props.data.title)
    return(
        <div className='coffees-text-zone'>
            
            <h1>{props.data.title}</h1>
            <p> {props.data.description}</p>
            <section>
                <img src={`../src/assets/Images/${props.data.img}`}/>
                <p>{props.data.ratio}</p>
                <p>{props.data.cup}</p>
            </section>
            <ul>
            {props.data.steps.map(step => <li key={step.idx}>{step.text}</li>)}    
            </ul>
        </div>

    )
}

export default Coffees





