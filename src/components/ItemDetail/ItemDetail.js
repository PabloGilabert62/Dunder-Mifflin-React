import './ItemDetail.css';
import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export default function ItemDetail ({prods}) {

    const {addItems} = useContext(CartContext)

    function handleAddToCart(prods){
        addItems(prods)
    }
    

    return(
        <div className='cards-details-flex'>
            <div className='cards-details '>
                <img src={prods.src} alt={prods.alt}/>
                <p className='font-title'>{prods.title} ${prods.price}</p>
                <p className='font-title'>Available stock: {prods.stock}</p>
                <p className='font-title'>Items added:{prods.stock}</p>
                <ItemCount onAddToCart={handleAddToCart}/>
            </div>
        </div>
    )
}