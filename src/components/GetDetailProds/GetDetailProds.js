import React from 'react';
import { getProdsByAlt } from '../../asyncMock';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../App';
import './GetDetailProds.css';

/* -- GET EACH DETAIL CARD -- */
const GetDetailProds = () => {

    let {items, setItems} = useContext(CartContext)
    
    const [count, setCount] = useState(0)
    const [prods, setProds] = useState({})
    const [isLoading, setIsLoading] = useState(true)
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

    if(isLoading) {
        return <p className='loading'>Loading...</p>
    }

    const addItems = () => {

        if(items.length < prods.stock){
            setItems([...items , prods.id])
        }

        (count < prods.stock) ? setCount(count + 1): setCount(count)
    }

    /* -- GET EACH DETAIL CARD -- */
    return (
        <div className='cards-details-flex'>
            <div className='cards-details'>
                <img src={prods.src} alt={prods.alt}/>
                <h5 className='font-title'>{prods.title} {prods.price}</h5>
                <p className='font-title'>Available stock: {prods.stock}</p>
                <p className='font-title'>Items added: {count}</p>
                <button onClick={addItems}>Add to cart</button>
            </div>
        </div>
    )
}

export default GetDetailProds