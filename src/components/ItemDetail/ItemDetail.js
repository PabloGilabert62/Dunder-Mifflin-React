import './ItemDetail.css';
import React, { useState } from "react";
import { CartContext } from '../../context/CartContext';
import { FavoritesContext } from '../../context/FavoritesContext';
import { useContext } from 'react';

const ItemDetail = ({prods}) => {

    const {addFavorites, removeFavorites, isInFavorites} = useContext(FavoritesContext)
    const {isInCart} = useContext(CartContext)

    const [showButton, setShowButton] = useState(false)
    
    const isAdded = () => {
        if (isInFavorites(prods.id)) {
            setShowButton(true)
        }
    }

    return(
        <div className='cards-details-flex'>
            <div className='cards-details '>
                <img src={prods.src} alt={prods.alt}/>
                <p className='font-title'>{prods.title} ${prods.price}</p>
                <p className='font-title'>Available stock: {prods.stock}</p>
                <p className='font-title'>Items added:{}</p>

                <button onClick={() => {showButton ? removeFavorites(prods.id) : addFavorites(prods)}}
                    className='buttonFavorite'>
                    {showButton ? 'Remove from favorites' : 'Add to favorites'}
                </button>
            </div> 
        </div>
    )
}
export default ItemDetail