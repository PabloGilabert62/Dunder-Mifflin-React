import React from "react";
import { useState } from "react";
import { createContext } from "react";
import Swal from "sweetalert2";

export const FavoritesContext = createContext()

export const FavoritesProvider = ({children}) => {

    const [favorites, setFavorites] = useState([])

    const addFavorites = (favToAdd) => {
        if(!isInFavorites(favToAdd.id)) {
            setFavorites([...favorites, favToAdd])
        }
        Swal.fire('Added to favorites!')
    }

    const isInFavorites = (id) => {
        return favorites.some(favorite => favorite.id === id)
    }

    const removeFavorites = (id) => {
        const updatedFavorites = favorites.filter(favorite => favorite.id !== id)
        setFavorites(updatedFavorites)
        Swal.fire('Item remove from favorites')
    }

    return(
        <FavoritesContext.Provider value={{favorites, addFavorites, removeFavorites, isInFavorites}}>
            {children}
        </FavoritesContext.Provider>
    )
}