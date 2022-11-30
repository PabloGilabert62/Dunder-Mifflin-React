import React from "react";
import "./Texts.css"

const Texts = ({text}) =>
{
    return(
        <div>
            <p className='text'>{text}</p>
        </div>
    )
}

export default Texts;