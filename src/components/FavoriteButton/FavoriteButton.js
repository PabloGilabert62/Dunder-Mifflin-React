import './FavoriteButton.css';
import React from 'react';
import { useContext } from "react";
import { FavoritesContext } from '../../context/FavoritesContext';

const FavoriteButton = () => {

    const {addFavorites, removeFavorites, isInFavorites} = useContext(FavoritesContext)

    return(
        <button className='btn-favorite' 
            onClick={() => {isInFavorites() ? removeFavorites() : addFavorites()}}>
            {isInFavorites() ? 'Remove from favorites' : 'Add to favorites'}
        </button>
    )
}

export default FavoriteButton