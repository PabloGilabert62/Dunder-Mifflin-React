import { useState } from "react"; //LIBRERIA DE ESTADOS DE REACT
import React from "react";

const Counter = ({stock, onAdd}) => {

    const [count, setCount] = useState(0);

    /* -- SI EL CONTADOR ES MENOR AL STOCK, SUMARLO -- */
        const add = () => { 
            (count < stock) ? setCount(count + 1): setCount(count)
        }
    /* -- -- */

    /* -- SI EL CONTADOR ES MENOR A 0, FIJARLO -- */
        const substract = () => { 
            (count > 0) ? setCount (count - 1) : setCount(count)
        }
    /* -- -- */

    const reset = () => { setCount (0)}
        return(
            <div>
                <h2>{count}</h2>

                <button onClick={() => add()}>add</button>

                <button onClick={() => substract()}>substract</button>

                <button onClick={() => reset()}>reset</button>

                <button onClick={() => onAdd(count)}>Add to cart</button>  
            </div>
        )
}

export default Counter;