import React from 'react';
import './CartIcon.css';
import { useContext } from 'react';
import { CartContext } from '../../App';

const CartIcon = () => {

    const {items} = useContext(CartContext)

    return(
        <button className='cartButton'>
            <img className='cartIcon' src="/images/CartIcon.png" alt="Cart Icon"/>
            {items.length}
        </button>
    )
}

export default CartIcon;