import './Cart.css';
import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import Checkout from '../Checkout/Checkout';

const Cart = () => {
    
    let totalAdd = 0;

    const total = (a, b) => {
        totalAdd += (a * b)
    }

    const {items, removeItem} = useContext(CartContext)
    
    return(
        <div>
            <span className='title'>Items in cart</span>
            {items.map(item => {
                return( 
                    <div className='flex-center'>
                        <div className='item-container'>
                            <h5>Product: {item.title}</h5>
                            <h5>Price: ${item.price}</h5>
                            <h5>Stock: {item.stock}</h5>
                            <h5>Items in cart: {item.count}</h5>
                            <h5>Subtotal: ${item.count * item.price}</h5>

                            {total(item.price, item.count)}

                            <button onClick={() => {item.id && removeItem(item.id)}} className='eliminate-item'> 
                                Eliminate Item
                            </button>
                        </div>
                    </div>
                )
            })}
            
            {totalAdd !== 0 ?
            <div>
                <div className='total'>Total: $ {totalAdd}</div>
                <div><button className='eliminate-cart'>Eliminate Cart</button></div>
            </div> :
            <div className='no-items'>
                No items added yet, go to explore our products!
            </div>}

            <Link to='/checkout'>Finalize purchase</Link>
        </div>
    )
}

export default Cart