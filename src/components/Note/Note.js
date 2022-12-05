import './Note.css';
import { Link } from 'react-router-dom';
import React from 'react';

const Note = ({ prods }) => {

    return(
        <div key={prods.id} className='cards-grids'>
            <div className='cards'>
                <img src={prods.src2} alt={prods.alt}/>
                <p>{prods.title}</p>
                <p>{prods.price}</p>
                <Link to={`/prods/${prods.alt}`}>See more</Link>
            </div>
        </div>
    )
}

export default Note