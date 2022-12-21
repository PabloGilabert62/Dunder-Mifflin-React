import React, { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [items, setItems] = useState([])

    const addItems = (itemsToAdd, count) => {

        const newObj = {...itemsToAdd, count}

        if(isInCart(newObj.id)){
            items.map(item => {
                if(item.id === newObj.id){
                    item.count += newObj.count
                }
                return item
            })
        } else {
            setItems([... items, newObj])
        }
    }

    const getCount = () => {
        let cant = 0;
        items.forEach(item => {
            cant += item.count
        })
        return cant
    }

    const isInCart = (id) => {
        return items.some(item => item.id === id)
    }

    const removeItem = (id) => {
        const updatedCart = items.filter(item => item.id !== id)
        setItems(updatedCart)
    }

    return(
        <CartContext.Provider value={{items, setItems, addItems, isInCart, removeItem, getCount}}>
            {children}
        </CartContext.Provider>
    )
}