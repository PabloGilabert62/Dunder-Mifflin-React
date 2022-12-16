import React, { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {

    const {items, setItems} = useState([])

    const addItems = (itemsToAdd) => {
        setItems([...items, itemsToAdd])
        console.log(itemsToAdd)
    }

    const isInCart = (id) => {
        return items.some(item => item.id === id)
    }

    const removeItems = (id) => {
        const updatedCart = items.filter(item => item.id !== id)
        setItems(updatedCart)
    }

    return(
        <CartContext.Provider value={{items, setItems, addItems, removeItems, isInCart}}>
            {children}
        </CartContext.Provider>
    )
}