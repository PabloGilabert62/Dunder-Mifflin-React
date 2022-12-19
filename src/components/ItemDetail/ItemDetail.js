import './ItemDetail.css';
import React from 'react';
import { useState } from 'react';

/* -- GET EACH DETAIL CARD -- */
const ItemDetail = () => {
    const [prods, setProds] = useState({})
    
    /* -- GET EACH DETAIL CARD -- */
    return (
        <div className='cards-details-flex'>
            <div className='cards-details'>
                <img src={prods.src} alt={prods.alt}/>
                <h5 className='font-title'>{prods.title} ${prods.price}</h5>
                <p className='font-title'>Available stock: {prods.stock}</p>
                <p className='font-title'>Items added:</p>
            </div>
        </div> 
    )
}

export default ItemDetail