import React, { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [items, setItems] = useState([])

    const total = () => {
        let acc = 0;

        items.forEach(item => {
            acc += item.count * item.price
        })

        return acc
    }

    const addItems = (itemsToAdd, count) => {

        const newObj = {...itemsToAdd, count}

        if(!isInCart(newObj.id)){
            setItems([...items, newObj])
        } else {
            
          const newProducts =  items.map(item => {
                if(item.id === newObj.id){
                    const newProducts = {
                        ...item,
                        count: item.count + count
                    }
                    return newProducts
                } else{
                    return item
                }
            })
            setItems(newProducts)
        }
    }

    const getCount = () => {
        let cant = 0;
        items.forEach(item => {
            cant += item.count
        })
        return cant
    }

    const clearCart = () => {
        setItems([])
    }

    const isInCart = (id) => {
        return items.some(item => item.id === id)
    }

    const removeItem = (id) => {
        const updatedCart = items.filter(item => item.id !== id)
        setItems(updatedCart)
    }

    return(
        <CartContext.Provider value={{items, setItems, addItems, isInCart, removeItem, getCount, total, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}