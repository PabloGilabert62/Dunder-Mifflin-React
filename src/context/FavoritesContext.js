import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const FavoritesContext = createContext()

export const FavoritesProvider = ({children}) => {

    const [favorites, setFavorites] = useState([])

    const addFavorites = (favToAdd) => {
        if(!isInFavorites(favToAdd.id)) {
            setFavorites([...favorites, favToAdd])
        }
    }

    const isInFavorites = (id) => {
        return favorites.some(favorite => favorite.id === id)
    }

    const removeFavorites = (id) => {
        const updatedFavorites = favorites.filter(favorite => favorite.id !== id)
        setFavorites(updatedFavorites)
    }

    return(
        <FavoritesContext.Provider value={{favorites, addFavorites, removeFavorites, isInFavorites}}>
            {children}
        </FavoritesContext.Provider>
    )
}