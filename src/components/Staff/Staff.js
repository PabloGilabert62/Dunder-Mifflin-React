import './Staff.css'
import React from 'react'

const Staff = () => {
    return(
        <div>
            <h1 className='title-location animate__animated animate__backInUp'>Meet our staff!</h1>

            <div className="audio-staff animate__animated animate__backInUp">
                <audio src="../images/the office theme.mp3" controls></audio>
            </div>

            <article id="CEOS-grids">

                <div className="text-staff">Dunder Mifflin CEO</div>
                <div className="text-staff">Regional Manager</div>
                
                <div className="staff-container light-blue">
                    <img className="img-grids" src='/images/david-wallace.jpg' alt="David Wallace"/>
                    <div className="light-blue">David Wallace</div>
                </div>

                <div className="staff-container ligth-blue">
                    <img className="img-grids" src='/images/dwight-schrute-1.jpg' alt="Dwight Schrute"/>
                    <div className="light-blue">Dwight Schrute</div>
                </div>

                <div className="text-staff">Customer support</div>
                <div className="text-staff">Human resources</div>

                <div className="staff-container ligth-blue">
                    <img className="img-grids" src='/images/pete.jpg' alt="Pete Miller"/>
                    <div className="light-blue">Pete Miller</div>
                </div>

                <div className="staff-container ligth-blue">
                    <img className="img-grids" src='/images/toby.jpg' alt="Toby Flenderson"/>
                    <div className="light-blue">Toby Flenderson</div>
                </div>

            </article>

            <div className="text-staff">Sellers</div>

            <article id="sellers-grids">

                <div className="staff-container light-blue">
                    <img className="img-grids" src='/images/jim-halpert.jpg' alt="Jim Halpert"/>
                    <div className="light-blue">Jim Halpert</div>
                </div>

                <div className="staff-container light-blue">
                    <img className="img-grids" src='/images/pam-beesly.jpg' alt="Pam Halpert"/>
                    <div className="light-blue">Pam Halpert</div>
                </div>

                <div className="staff-container light-blue">
                    <img className="img-grids" src='/images/phylis.jpg' alt="Phyllis Vance"/>
                    <div className="light-blue">Phyllis Vance</div>
                </div>

                <div className="staff-container light-blue">
                    <img className="img-grids" src='/images/stanley.jpg' alt="Stanley Hudson"/>
                    <div className="light-blue">Stanley Hudson</div>
                </div>

                <div className="staff-container light-blue">
                    <img className="img-grids" src='/images/prision-mike.jpg' alt="Prison Mike"/>
                    <div className="light-blue">Prison Mike</div>
                </div>

                <div className="staff-container light-blue">
                    <img className="img-grids" src='/images/clark.jpg' alt="Clark Green"/>
                    <div className="light-blue">Clark Green</div>
                </div>

            </article>

            <div className="text-staff">Accountancy</div>

            <article id="accountancy-grids">

                <div className="staff-container light-blue">
                    <img className="img-grids" src='/images/oscar.jpg' alt="Oscar Martínez"/>
                    <div className="light-blue">Oscar Martínez</div>
                </div>

                <div className="staff-container light-blue">
                    <img className="img-grids" src='/images/angela.jpg' alt="Angela Martin"/>
                    <div className="light-blue">Angela Martin</div>
                </div>

                <div className="staff-container light-blue">
                    <img className="img-grids" src='/images/kevin.jpg' alt="Kevin Malone"/>
                    <div className="light-blue">Kevin Malone</div>
                </div>

            </article>

            <span className="footer-">
                <img className="footer-logo" src='/images/DunderMifflinLogo.png' alt="Dunder Mifflin Paper Company Logo"/>
                <span className="text-footer">Dunder Mifflin Company Since 2008</span>
            </span>
        </div>
    )
}

export default Staff