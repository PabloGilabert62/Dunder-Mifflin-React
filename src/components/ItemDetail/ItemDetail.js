import './ItemDetail.css';
import React from 'react';
import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { FavoritesContext } from '../../context/FavoritesContext';

const ItemDetail = ({ prods }) => {

    const {items, addItems} = useContext(CartContext)
    const {addFavorites, removeFavorites, isInFavorites} = useContext(FavoritesContext)

    const handleAddToCart = (quantity) => {
        addItems(prods,quantity)
    }

    const isAdded = isInFavorites(items.id)

    //EACH CARD
    return (
        <div className='flex-item-detail'>
            <div className='each-card'>
                <img alt={items.alt} src={items.src}/>
                <p className='font-title-item-detail'>{items.title} ${items.price}</p>
                <div className='line-item-detail'></div>
                <p className='font-title-item-detail'>Available stock: {items.stock}</p>
                <div className='line-item-detail'></div>

                <ItemCount initial={0} stock={items.stock} onAddToCart={handleAddToCart}/>

                <button className='btn-favorite' 
                    onClick={() => {isAdded ? removeFavorites(items.id) : addFavorites(items)}}>
                    {isAdded ? 'Remove from favorites' : 'Add to favorites'}
                </button>
            </div>
        </div>
    )
}
export default ItemDetail