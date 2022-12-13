import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext/CartContext';

const Cart = () => {

    const { cart } = useContext(CartContext)

    return (
        <div>
            { cart.map(cart => {
                return (
                    <div>
                        <h1>{cart.title}</h1>
                    </div>
                )
            })}
        </div>
    )
}

export default Cart