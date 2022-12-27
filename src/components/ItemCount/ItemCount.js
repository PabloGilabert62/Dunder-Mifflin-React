import './ItemCount.css';
import React from 'react';
import { useState } from 'react';

const ItemCount = ({stock, initial, onAddToCart}) => {

    const [count, setCount] = useState(initial);
    const [button, setButton] = useState(true)

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

    const toFalse = () => {
        setButton(false)
    }

    return (
        <div>
            <p className='font-title-count'>Items added: {count}</p>
            <div className='line-count'></div>

            {button === true &&
            <div>
                <button onClick={handleAdd} className='buttonPlus'>+</button>
                <button onClick={() => count != 0 && onAddToCart(count)} className='buttonAdd'>Add to cart</button>
                <button onClick={handleSubstract} className='buttonMinus'>-</button>
            </div>}

            {button === false &&
            <div className='items-added'>
                Items added: {count}
            </div>}
        </div>
    )

}

export default ItemCount