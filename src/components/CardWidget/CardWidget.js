import './CardWidget.css';
import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CardWidget = () => {

    const {getCount} = useContext(CartContext)

    return(
        <div className='card-widget'>
            <img className='cart-icon' src='../images/CartIcon.png' alt='cart icon'/>
            <span className="card-widget position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {getCount()}
            </span>
        </div>
    )
}

export default CardWidget

