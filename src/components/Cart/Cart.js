import './Cart.css';
import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    
    const {items, removeItem, total} = useContext(CartContext)
    
    return(
        <div className='animate__animated animate__backInUp'>
            {total() !== 0 &&
            <span className='title animate__animated animate__backInLeft'>Items in cart</span>}
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
            
            <div className='margin-finalize'>
                {total() !== 0 &&
                <Link className='finalize-purchase' to='/checkout'>Finalize purchase</Link>}
            </div>

            {total() === 0 &&   
            <div className='no-items'>
                No items added yet, go to explore our products!
            </div>} 

            {total() !== 0 &&
            <div>
                <div className='total'>Total: ${total()}</div>
                {/* <div><button className='eliminate-cart'>Eliminate Cart</button></div> */}
            </div>}
        </div>
    )
}

export default Cart