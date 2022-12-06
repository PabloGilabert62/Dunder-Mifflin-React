import { useState } from "react"; //LIBRERIA DE ESTADOS DE REACT
import React from "react";
import "./Counter.css";

const Counter = ({stock}) => {

    const [count, setCount] = useState(0);

    /* -- IF THE COUNTER IS MINOR TO THE STOCK, ADD IT UP -- */
    const add = () => { 
        (count < stock) ? setCount(count + 1): setCount(count)
    }

    /* -- IF THE COUNTER IS 0, LOCK IT -- */
    const substract = () => { 
        (count > 0) ? setCount (count - 1) : setCount(count)
    }

    /* -- ALERT OF ITEMS ADDED TO CART -- */
    const onAdd = () => {
        alert(count + " items added to cart");
    }

    return(
        <div>
            <h2 className="font-counter">Items: {count}</h2>
            <h2 className="font-counter">Max stock: {stock}</h2>
            
            <div className="flex-center">
                <div className="counter">
                    <button className="counterPlus" onClick={() => add()}>+</button>
                    <button className="counterAdd" onClick={() => onAdd(count)}>Add to cart</button>
                    <button className="counterMinus"onClick={() => substract()}>-</button>
                </div>
            </div>
        </div>
    )
}

export default Counter;