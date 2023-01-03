import './Location.css'
import React from 'react'

const Location = () => {
    return(
        <div>
            <h1 className='title-location animate__animated animate__backInUp'>Location</h1>

            <div className="audio-location animate__animated animate__backInUp">
                <audio src="../images/the office theme.mp3" controls></audio>
            </div>
    
            <div className="animate__animated animate__backInUp">
                <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d776.2819851565177!2d-77.02709887080927!3d38.89818949872318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7d892e80613%3A0xa9b4c8e029687eb9!2sThe%20Office%20Experience%20Washington%20D.C.!5e0!3m2!1ses!2sar!4v1656544715325!5m2!1ses!2sar"></iframe>
            </div>

            <span className="footer-">
                <img className="footer-logo" src='/images/DunderMifflinLogo.png' alt="Dunder Mifflin Paper Company Logo"/>
                <span className="text-footer">Dunder Mifflin Company Since 2008</span>
            </span>
        </div>
    )
}

export default Location