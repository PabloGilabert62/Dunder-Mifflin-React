import './Staff.css'
import React from 'react'

const Staff = () => {
    return(
        <div>
            <h1 className='title-location animate__animated animate__backInUp'>Staff</h1>

            <div id="audio-desktop" className="animate__animated animate__backInUp">
                <audio src="../images/the office theme.mp3" controls></audio>
            </div>

            <span className="footer-">
                <img className="footer-logo" src='/images/DunderMifflinLogo.png' alt="Dunder Mifflin Paper Company Logo"/>
                <span className="text-footer">Dunder Mifflin Company Since 2008</span>
            </span>
        </div>
    )
}

export default Staff