import './index.scss'

const Contact = () => {



    return(
        <>
        <div className='contact-textzone'>
            <h1>Contact Me</h1>
            <h2>I would love you hear from you</h2>
            <p>Whether its a compliment, a critque or you burnt your hand touching that espresso while using this site</p>
            <p>Or maybe you are looking for a Junior Web Developer, whatever the case, i'm all ears.</p>
        </div>
        <div className='contact-form'>
        {/* <form ref={refForm} onSubmit={sendEmail}>    */}
        <form>
            <ul>
                <li className="half">
                <input 
                    placeholder="Name" 
                    type="text" 
                    name="name" 
                    required />
                </li>
                <li className="half">
                <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                />
                </li>
                <li>
                <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                />
                </li>
                <li>
                <textarea
                    placeholder="Message"
                    name="message"
                    required
                ></textarea>
                </li>
                <li>
                <input 
                    type="submit" 
                    className="flat-button" 
                    value="SEND" />
                </li>
            </ul>
        </form>
    </div>
    </>
    )
}

export default Contact