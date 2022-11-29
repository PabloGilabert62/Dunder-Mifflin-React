import React from 'react';
import './ItemListContainer.css';

const ItemListContainer = ({text}) =>
{
    return(
        <div>
            <p className='text'>{text}</p>
        </div>
    )
}

export default ItemListContainer;