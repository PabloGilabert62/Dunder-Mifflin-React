import './CardList.css';
import { Link } from 'react-router-dom';
import React from 'react';

const CardList = ({ prods }) => {

    return(
        /* -- ALL CARDS -- */
            <div className='cards-grids'>
                <div className='cards'>
                    <img src={prods.src} alt={prods.alt}/>
                    <p>{prods.title}</p>
                    <p>{prods.price}</p>
                    <Link to={`/prods/${prods.alt}`}>See more</Link>
                </div>
            </div>
        /* --------------- */
    )
}

export default CardList