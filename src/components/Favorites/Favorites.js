import './Favorites.css';
import React from 'react';
import { useContext } from 'react';
import { FavoritesContext } from '../../context/FavoritesContext';

const Favorites = () => {

    const {favorites} = useContext(FavoritesContext)

    return(
    <div>
        <h1>Favorite items</h1>
        {favorites.map(favorite => {
            return(
                <div>
                    <h5>{favorite.title}</h5>
                </div>
            )
        })}
    </div>
    )
}

export default Favorites