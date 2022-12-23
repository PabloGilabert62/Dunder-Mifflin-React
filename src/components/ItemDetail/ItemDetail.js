import './ItemDetail.css';
import React from 'react';
import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ prods, count }) => {

    const {addItems} = useContext(CartContext)

    const handleAddToCart = (quantity) => {
        addItems(prods,quantity)
    }

    //EACH CARD
    return (
        <div className='flex-item-detail'>
            <div className='each-card'>
                <img alt={prods.alt}/>
                <p className='font-title-item-detail'>{prods.title} ${prods.price}</p>
                <div className='line-item-detail'></div>
                <p className='font-title-item-detail'>Available stock: {prods.stock}</p>
                <div className='line-item-detail'></div>
                <ItemCount initial={1} stock={prods.stock} onAddToCart={handleAddToCart}/>
            </div>
        </div>
    )
}
export default ItemDetail