import React from 'react';
import './CartIcon.css';

const CartIcon = () =>
{
    return(
        <button className='cartButton'>
            <img className='cartIcon' src="./images/CartIcon.png" alt="Cart Icon"/>
            7
        </button>
    )
}

export default CartIcon;