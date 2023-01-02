import './ItemDetail.css';
import React from 'react';
import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { FavoritesContext } from '../../context/FavoritesContext';

const ItemDetail = ({ prods }) => {

    const {addItems} = useContext(CartContext)
    const {addFavorites, removeFavorites, isInFavorites} = useContext(FavoritesContext)

    const handleAddToCart = (quantity) => {
        addItems(prods,quantity)
    }

    const isAdded = isInFavorites(prods.id)

    //EACH CARD
    return (
        <div className='flex-item-detail animate__animated animate__backInDown'>
            <div className='each-card'>
                <img alt={prods.alt} src={prods.src}/>
                <p className='font-title-item-detail'>{prods.title} ${prods.price}</p>
                <div className='line-item-detail'></div>
                <p className='font-title-item-detail'>Available stock: {prods.stock}</p>
                <div className='line-item-detail'></div>

                <ItemCount initial={0} stock={prods.stock} onAddToCart={handleAddToCart}/>

                <button className='btn-favorite' 
                    onClick={() => {isAdded ? removeFavorites(prods.id) : addFavorites(prods)}}>
                    {isAdded ? 'Remove from favorites' : 'Add to favorites'}
                </button>
            </div>
        </div>
    )
}
export default ItemDetail