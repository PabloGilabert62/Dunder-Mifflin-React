import './Item.css';
import { Link } from 'react-router-dom';
import React from 'react';

const Item = ({ prods }) => {
    //ALL CARDS
    return(
        <div className='cards-grids'>
            <div className='cards'>
                <img src={prods.src} alt={prods.alt}/>
                <p className='prod-title'>{prods.title}</p>
                <div className='line'></div>
                <Link className='btn-details' to={`/prods/${prods.alt}`}>See more</Link>
            </div>
        </div>
    )
}
export default Item