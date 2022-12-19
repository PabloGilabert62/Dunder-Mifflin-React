import React, { useState } from "react";
import { CartContext } from '../../context/CartContext';
import { FavoritesContext } from '../../context/FavoritesContext';
import { useContext } from 'react';

const ItemDetail = ({prods}) => {
    const {addFavorites, removeFavorites} = useContext(FavoritesContext)
    const {isInCart} = useContext(CartContext)
    const [showButton, setShowButton] = useState(true)

    const isAdded = () => {
        if (showButton) {
            setShowButton(false)
        }
    }

    return(
        <div>
            <button onClick={() => {isAdded ? removeFavorites(prods.id) : addFavorites(prods)}}
                className='buttonFavorite'>
                {isAdded ? 'Remove from favorites' : 'Add to favorites'}
            </button>
        </div> 
    )
}
export default ItemDetail