import './Contact.css'
import React from 'react'
import { useState } from 'react'
import Swal from 'sweetalert2'

const Contact = () => {

    const [name, setName] = useState ("")
    const [lastname, setLastname] = useState ("")
    const [email, setEmail] = useState ("")
    const [repeatEmail, setRepeatEmail] = useState ("")

    const alert = () => {
        Swal.fire({
            title:'Data sended!',
            showConfirmButton: false
        })
    }

    return(
        <div>
            <h1 className='title-home animate__animated animate__backInUp'>Contact</h1>

            <div id="audio-desktop" className="animate__animated animate__backInUp">
                <audio src="../images/the office theme.mp3" controls></audio>
            </div>

            <div className="text-contact animate__animated animate__backInUp">
                Our team of HHRR is always on your entire disposition
            </div>
            <div className="text-contact-last animate__animated animate__backInUp">
                Have no doubt on reach contact with us for any inconvenience or consult that may you have!
            </div>

            <div className='animate__animated animate__backInUp'>
                <div className='checkout-flex'>
                    <form className='input-checkout'>
                        
                        <div>
                            <div className='title-input'>Name</div>
                            <input className='input-width' placeholder='Mark' onChange={event => {setName(event.target.value)}}></input>
                        </div>

                        <div>
                            <div className='title-input'>Lastname</div>
                            <input className='input-width' placeholder='Otto' onChange={event => {setLastname(event.target.value)}}></input>
                        </div>

                        <div>
                            <div className='title-input'>Email</div>
                            <input className='input-width' placeholder='someone123@hotmail.com' onChange={event => {setEmail(event.target.value)}}></input> 
                        </div>

                        <div>
                            <div className='title-input'>Repeat email</div>
                            <input className='input-width' placeholder='someone123@hotmail.com' onChange={event => {setRepeatEmail(event.target.value)}}></input>
                        </div>

                        {
                        name !== "" &&
                        lastname !== "" && 
                        email !== "" && 
                        repeatEmail !== "" && 
                        email === repeatEmail &&
                        <button className='finalize-order' type='submit' onClick={() => alert()}>Send</button>
                    }
                    </form>
                </div>
            </div>
            <span className="footer-">
                <img className="footer-logo" src='/images/DunderMifflinLogo.png' alt="Dunder Mifflin Paper Company Logo"/>
                <span className="text-footer">Dunder Mifflin Company Since 2008</span>
            </span>
        </div>
    )
}

export default Contact