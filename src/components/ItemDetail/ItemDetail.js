import './ItemDetail.css';
import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

export default function ItemDetail ({prods, count}) {

    return(
        <div className='cards-details-flex'>
            <div className='cards-details '>
                <img src={prods.src} alt={prods.alt}/>
                <p className='font-title'>{prods.title} ${prods.price}</p>
                <p className='font-title'>Available stock: {prods.stock}</p>
                <p className='font-title'>Items added:{count}</p>
                <ItemCount/>
            </div>
        </div>
    )
}