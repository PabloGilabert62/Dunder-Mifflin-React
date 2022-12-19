import React from "react";
import { CartContext } from '../../context/CartContext';
import { FavoritesContext } from '../../context/FavoritesContext';
import { useState, useEffect, useContext} from 'react';
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = () => {
    const {isInFavorites} = useContext(FavoritesContext)
    const {addItems} = useContext(CartContext)
    
    return(
        <div>
            <div>
                <button onClick={() => {add()}} className='buttonPlus'>+</button>

                <button onClick={() => {addToCart()}}>Add to cart</button>

                <button onClick={() => {substract()}} className='buttonMinus'>-</button>
            </div>

            
            <button onClick={() => {isAdded ? removeFavorites(prods.id) : addFavorites(prods)}}

                className='buttonFavorite'>
                {isAdded ? 'Remove from favorites' : 'Add to favorites'}

            </button>  
        </div> 
    )
}
export default ItemDetail