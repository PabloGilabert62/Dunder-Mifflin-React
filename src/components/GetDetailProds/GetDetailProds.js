import './GetDetailProds.css';
import React from 'react';
import { getProdsByAlt } from '../../asyncMock';
import { useParams } from 'react-router-dom';
import { useState, useEffect, useContext} from 'react';
import { FavoritesContext } from '../../context/FavoritesContext';
import { CartContext } from '../../context/CartContext';

/* -- GET EACH DETAIL CARD -- */
const GetDetailProds = () => {
    
    const [count, setCount] = useState(0)
    const [prods, setProds] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const {alt} = useParams()

    const {addFavorites, isInFavorites, removeFavorites} = useContext(FavoritesContext)
    cosnt {} = useContext(CartContext)

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

    const isAdded = isInFavorites(prods.id)

    const add = () => { 
        (count < prods.stock) ? setCount(count + 1): setCount(count)
    }

    const substract = () => { 
        (count > 0) ? setCount (count - 1) : setCount(count)
    }

    const addCart = () => {

    }
   
    /* -- GET EACH DETAIL CARD -- */
    return (
        <div className='cards-details-flex'>
            <div className='cards-details'>

                <img src={prods.src} alt={prods.alt}/>
                <h5 className='font-title'>{prods.title} {prods.price}</h5>
                <p className='font-title'>Available stock: {prods.stock}</p>
                <p className='font-title'>Items added: {count}</p>

                <div>
                    <button onClick={() => {add()}} className='buttonPlus'>+</button>
                    <button onClick={() => {addCart()}}>Add to cart</button>
                    <button onClick={() => {substract()}} className='buttonMinus'>-</button>
                </div>

                <button onClick={() => {isAdded ? removeFavorites(prods.id) : addFavorites(prods)}} 
                    className='buttonFavorite'>
                    {isAdded ? 'Remove from favorites' : 'Add to favorites'}
                </button>
                
            </div>
        </div> 
    )
}

export default GetDetailProds