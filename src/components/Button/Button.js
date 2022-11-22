import React from 'react';
import './Button.css';

const Button = ({ children, btnStyle, navBorder }) =>
{
    return(
        <span className={navBorder}>
            <button className={btnStyle}>
                {children}
            </button>
        </span>
    ) 
}

export default Button;