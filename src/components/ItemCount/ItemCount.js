import React from "react";
import { useState } from "react";
import { getProdsByAlt } from '../../asyncMock';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { FavoritesContext } from '../../context/FavoritesContext';
import { useState, useEffect, useContext} from 'react';

const ItemCount = () => {
    const {isInFavorites} = useContext(FavoritesContext)
    const {addItems} = useContext(CartContext)

    const [isLoading, setIsLoading] = useState(true)
    const [showButton, setShowButton] = useState(true)
    const {alt} = useParams()
    const [count, setCount] = useState(0)

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

    /* ------------------------------------------------------------------------------- */
    const isAdded = isInFavorites(prods.id)

    /* ------------------------------------------------------------------------------- */
    const add = () => { 
        (count < prods.stock) ? setCount(count + 1): setCount(count)
    }

    /* ------------------------------------------------------------------------------- */
    const substract = () => { 
        (count > 0) ? setCount (count - 1) : setCount(count)
    }

    /* ------------------------------------------------------------------------------- */
    const addToCart = () => {
        if(count !== 0){
            addItems({...prods, count})
            setShowButton(false)
        }
    }

    return(
        {/* CART BUTTON */}

        {showButton && 
        <div>
            <button onClick={() => {add()}} className='buttonPlus'>+</button>

            <button onClick={() => {addToCart()}}>Add to cart</button>

            <button onClick={() => {substract()}} className='buttonMinus'>-</button>
        </div>}

        {/* FAVORITE BUTTON */}
        <button onClick={() => {isAdded ? removeFavorites(prods.id) : addFavorites(prods)}} 

            className='buttonFavorite'>
            {isAdded ? 'Remove from favorites' : 'Add to favorites'}

        </button>   
    )
}

export default ItemCount