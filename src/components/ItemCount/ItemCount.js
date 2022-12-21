import './ItemCount.css';
import React from 'react';
import { useState } from 'react';

const ItemCount = ({stock, initial, onAddToCart}) => {

    const [count, setCount] = useState(initial);

    const handleSubstract = () => {
        if (count > 1) {
            setCount(count - 1);
        } 
    }

    const handleAdd = () => {
        if (count < stock) {
            setCount(count + 1);
        } 
    }

    return (
        <div>
            <p className='font-title'>Items added: {count}</p>
            <button onClick={handleAdd} className='buttonPlus'>+</button>
            <button onClick={()=> onAddToCart(count)} className='buttonAdd'>Add to cart</button>
            <button onClick={handleSubstract} className='buttonMinus'>-</button>
        </div>
    )

}

export default ItemCount