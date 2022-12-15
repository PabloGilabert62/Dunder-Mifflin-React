import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [items, setItems] = useState([])

    const addItems = (itemsToAdd) => {
        if(!isInCart(itemsToAdd.id)) {
            setItems([...items, itemsToAdd])
        }
    }

    const isInCart = (id) => {
        return items.some(item => item.id === id)
    }

    const removeItems = (id) => {
        const updatedCart = items.filter(item => item.id !== id)
        setItems(updatedCart)
    }

    const getQuantity = () => {
        let totalQuantity = 0;

        items.forEach(item => {
            totalQuantity += item.quantity
        })
    }

    return(
        <CartContext.Provider value={{items, addItems, removeItems, isInCart, getQuantity}}>
            {children}
        </CartContext.Provider>
    )
}