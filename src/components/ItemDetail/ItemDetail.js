import './ItemDetail.css';
import React, { useState } from 'react';
import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { FavoritesContext } from '../../context/FavoritesContext';

const ItemDetail = ({ prods, count }) => {

    const {addItems} = useContext(CartContext)
    const {addFavorites, removeFavorites, isInFavorites} = useContext(FavoritesContext)
    const [favorite, setFavorite] = useState(true)

    const handleAddToCart = (quantity) => {
        addItems(prods,quantity)
    }

    //EACH CARD
    return (
        <div className='flex-item-detail'>
            <div className='each-card'>
                <img alt={prods.alt} src={prods.src}/>
                <p className='font-title-item-detail'>{prods.title} ${prods.price}</p>
                <div className='line-item-detail'></div>
                <p className='font-title-item-detail'>Available stock: {prods.stock}</p>
                <div className='line-item-detail'></div>
                <ItemCount initial={1} stock={prods.stock} onAddToCart={handleAddToCart}/>

                <button className='btn-favorite' onClick={() => {isInFavorites ? 
                    addFavorites() 
                    : 
                    removeFavorites()}}>
                    {isInFavorites ? 
                        'Add to favorites' 
                        : 
                        'Remove from favorites'
                    }   
                </button>

            </div>
        </div>
    )
}
export default ItemDetail