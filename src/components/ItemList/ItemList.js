import './ItemList.css';
import { Link } from 'react-router-dom';
import React from 'react';

const ItemList = ({ prods }) => {
    
    return(
        /* -- ALL CARDS -- */
            <div className='cards-grids'>
                <div className='cards'>
                    <img src={prods.src} alt={prods.alt}/>
                    <p>{prods.title}</p>
                    <div className='btn-details'>
                        <Link className='btn-details' to={`/prods/${prods.alt}`}>See more</Link>
                    </div>
                </div>
            </div>
        /* --------------- */
    )
}

export default ItemList