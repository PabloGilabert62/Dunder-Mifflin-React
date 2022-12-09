import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import './FinalizePurchase.css';

const FinalizePurchase = ({stock}) => {

    const [purchase, setPurchase] = useState(false);
    const [count, setCount] = useState(0);

    const add = () => { 
        (count < stock) ? setCount(count + 1): setCount(count)
    }

    const substract = () => { 
        (count > 0) ? setCount (count - 1) : setCount(count)
    }

    const onAdd = () => {
        setPurchase(true);
    }

    return (
        <div>
            {purchase ? (<Link className="finalize" to={'/cart'}>Finalize purchase</Link>) : 
            (<div>
                <p className="font-counter">Items: {count}</p>
                <p className="font-counter">Max stock:  {stock}</p>
                
                <button className="counterAdd" onClick={add}>+</button>
                <button className="btn-cart" onClick={onAdd}>Add to cart</button>
                <button className="counterMinus" onClick={substract}>-</button>
            </div>)}
        </div>
    )
}

export default FinalizePurchase