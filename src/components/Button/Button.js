import React from 'react';

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