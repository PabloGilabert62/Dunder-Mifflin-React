import './ItemCount.css';
import React, {useState } from "react";
import { getProdsByAlt } from '../../asyncMock';

export default function ItemCount({stock, initial, text, onAddToCart}) {

    const [isLoading, setIsLoading] = useState(true)
    const [count, setCount] = useState(initial);
    const {alt} = useParams()

    useEffect(() => {

        getProdsByAlt(alt)

            .then(response => {
                setProds(response)
            })

            .catch(error => {
                console.error(error)
            })

            .finally(() => {
                setIsLoading(false)
            })

    }, [alt])

    function handleSubstract() {
        if (count > 1) setCount(count - 1);
    }

    function handleAdd() {
        if (count < stock ) setCount(count + 1);
    }

    function addToCart(){}

    return (
        <div>
            <div>
                <div>
                    <button onClick={handleAdd} className='buttonPlus'>+</button>

                    <button onClick={addToCart}>Add to cart</button>

                    <button onClick={handleSubstract} className='buttonMinus'>-</button>
                </div>

                <div>
                    <button onClick={()=> {onAddToCart(count)}} >{text}</button>
                </div>
            </div>
        </div>
    );
}