import { useState } from 'react'
import './index.scss'


const Coffees = (props) => {

    // const {steps} = props.data;

    // function addList(){
    //     let array = steps

    //     console.log(array)

    //     for(let x = 0; x < array.size(); x++){
    //         setList(<li key={array[x]}>{array[x]}</li>)
    //     }
    // }

    //addList();

    //const [list, setList] = useState()

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
                {/* {() => addList} */}


                {/* {props.data.steps.forEach(element => {
                    <li>{element}<
                    /li>
                })} */}

                {/* <li>Clean your portafilter.</li>
                <li>Dose correctly.</li>
                <li>Distribute your grounds in the portafilter.</li>
                <li>Tamp evenly and consistently.</li>
                <li>Rinse your group head.</li>
                <li>Insert the portafilter and start brewing immediately.</li>
                <li>Be aware of the yield & brew time.</li>
                <li>Serve with a smile.</li> */}
            </ul>

        </div>

    )
}

export default Coffees


/*
    return(
        <div className='coffees-text-zone'>
            <h1>Espresso</h1>
            
            <p> The espresso, also known as a short black, 
                is approximately 1 oz. of highly concentrated coffee. 
                Although simple in appearance, it can be difficult to master.
                </p>
                <section>
                <img src={Espresso}/>
                <p>Ratio: 1 shot of espresso</p>
                <p>Cup: 60-120 ml. Espresso Cup</p>
                </section>
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
*/