import React from "react";
import './Start.css';

const Start = () => {
    return(
        <div>
            <div className="start-greeting">
                <p>Welcome to Dunder Mufflin!</p>
                <p>Where would you like to go? You can see the navbar just above!</p>
            </div>

            <span className="footer-">
                <img className="footer-logo" src='/images/DunderMifflinLogo.png' alt="Dunder Mifflin Paper Company Logo"/>
                <span className="text-footer">Dunder Mifflin Company Since 2008</span>
            </span>
        </div>
    )
}

export default Start