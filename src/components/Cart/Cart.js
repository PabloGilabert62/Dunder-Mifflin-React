import './Cart.css';
import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    
    const {items, removeItem, total} = useContext(CartContext)
    
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

                            <button onClick={() => {item.id && removeItem(item.id)}} className='eliminate-item'> 
                                Eliminate Item
                            </button>
                        </div>
                    </div>
                )
            })}
            
           
            <div>
                <div className='total'>Total: ${total()}</div>
                <div><button className='eliminate-cart'>Eliminate Cart</button></div>
            </div>
            <div className='no-items'>
                No items added yet, go to explore our products!
            </div>

            <Link to='/checkout'>Finalize purchase</Link>
        </div>
    )
}

export default Cart