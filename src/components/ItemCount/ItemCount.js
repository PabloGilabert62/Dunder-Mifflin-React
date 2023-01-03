import './ItemCount.css';
import React from 'react';
import { useState } from 'react';

const ItemCount = ({stock, initial, onAddToCart}) => {

    const [count, setCount] = useState(initial);
    const [button, setButton] = useState(true)

    const handleSubstract = () => {
        if (count > 0) {
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
            <p className='font-title-count'>Items added: {count}</p>
            <div className='line-count'></div>

            {button &&
            <div>
                <button onClick={handleAdd} className='buttonPlus'>+</button>
                <button onClick={() => [count !== 0 && onAddToCart(count)][count !== 0 && setButton(false)]} className='buttonAdd'>Add to cart</button>
                <button onClick={handleSubstract} className='buttonMinus'>-</button>
            </div>}
           
        </div>
    )

}

export default ItemCount