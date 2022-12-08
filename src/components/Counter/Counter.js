import { useState } from "react"; //LIBRERIA DE ESTADOS DE REACT
import { Link } from "react-router-dom";
import React from "react";
import "./Counter.css";

const Counter = ({stock}) => {

    const [count, setCount] = useState(0);
    const [btn, setBtn] = useState({});

    /* -- IF THE COUNTER IS MINOR TO THE STOCK, ADD IT UP -- */
    const add = () => { 
        (count < stock) ? setCount(count + 1): setCount(count)
    }

    /* -- IF THE COUNTER IS 0, LOCK IT -- */
    const substract = () => { 
        (count > 0) ? setCount (count - 1) : setCount(count)
    }

    const handleChange = (e) => {
        setCount(e.target.value);
    }

    const onAdd = () => {
        (count != 0) ? alert(count + " items added to cart") : alert("no items added to cart")
    }

    return(

        
        <div>
            <input onChange={handleChange} value={count} readOnly/>
            <h2 className="font-counter">Max stock: {stock}</h2>
            
            <div className="flex-center">
                <div className="counter">
                    <button className="counterPlus" onClick={add}>+</button>
                    <button className="counterAdd" onClick={onAdd}>Add to cart</button>
                    <button className="counterMinus" onClick={substract}>-</button>
                </div>
            </div>
        </div>
    )
}

export default Counter;