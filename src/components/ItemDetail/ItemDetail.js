import './ItemDetail.css';
import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export default function ItemDetail ({prods, initial}) {

    const {addItems} = useContext(CartContext)

    function handleAddToCart(prods){
        addItems(prods)
    }
    

    return(
        <div className='cards-details-flex'>
            <div className='cards-details '>
                <img src={prods.src} alt={prods.alt}/>
                <p className='font-title'>{prods.title} ${prods.price}</p>
                <div className='line'></div>
                <p className='font-title'>Available stock: {prods.stock}</p>
                <div className='line'></div>
                <ItemCount onAddToCart={handleAddToCart}/>
            </div>
        </div>
    )
}