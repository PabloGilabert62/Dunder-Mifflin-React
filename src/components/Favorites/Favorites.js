import './Favorites.css';
import React from 'react';
import { useContext } from 'react';
import { FavoritesContext } from '../../context/FavoritesContext';

const Favorites = () => {

    const {favorites} = useContext(FavoritesContext)
    return(
        <div>
            <h1 className='title-fav'>Favorite items</h1>
            {favorites.map(favorite => {
                return(
                    <div className='cards-details-flex-fav'>
                        <div className='cards-details-fav'>
                            <img src={favorite.src} alt={favorite.alt}/>
                            <p className='font-title-fav'>{favorite.title}</p>
                            <div className='line-fav'></div>
                            <p className='font-title-fav'>Price: ${favorite.price}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Favorites