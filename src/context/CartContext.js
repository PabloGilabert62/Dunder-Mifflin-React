import React, { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [items, setItems] = useState([])

    const addItems = (itemsToAdd) => {

        if(isInCart(itemsToAdd.id)) {

            const updatedCart = items.map((prod) => {

                if(prod.id === itemsToAdd.id){
                    return {...prod, count:prod.count + itemsToAdd.count}
                }
            })

            setItems(updatedCart)

        } else {
            setItems([...items, itemsToAdd])
        }  
    }

    const isInCart = (id) => {
        return items.some(item => item.id === id)
    }

    return(
        <CartContext.Provider value={{items, setItems, addItems, isInCart}}>
            {children}
        </CartContext.Provider>
    )
}