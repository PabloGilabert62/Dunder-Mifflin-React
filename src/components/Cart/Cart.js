import './Cart.css';
import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Cart = () => {

    const {items} = useContext(CartContext)
    
    return(
    <div>
        <h1>Items in cart</h1>
        {items.map(item => {
            return(
                <div>
                    <h5>{item.title}</h5>
                </div>
            )
        })}
    </div>
    )
}

export default Cart