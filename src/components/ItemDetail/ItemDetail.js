import './ItemDetail.css';
import React, { useState } from "react";
import { CartContext } from '../../context/CartContext';
import { FavoritesContext } from '../../context/FavoritesContext';
import { useContext } from 'react';
import { useEffect } from "react";
import { getProdsByAlt } from '../../asyncMock';
import { useParams } from "react-router-dom";

const ItemDetail = () => {

    const {addFavorites, removeFavorites, isInFavorites} = useContext(FavoritesContext)
    const {isInCart} = useContext(CartContext)

    const [showButton, setShowButton] = useState(true)
    const [isLoading, setIsLoading] = useState(true)
    const {alt} = useParams()
    const [prods, setProds] = useState({})

    const isAdded = () => {
        if (isInFavorites) {
            setShowButton(false)
        }
    }

    useEffect(() => {

        getProdsByAlt(alt)

            .then(response => {
                setProds(response)
            })

            .catch(error => {
                console.error(error)
            })

            .finally(() => {
                setIsLoading(false)
            })

    }, [alt])

    return(
        <div className='cards-details-flex'>
            <div className='cards-details'>
                
                <img src={prods.src} alt={prods.alt}/>
                <h5 className='font-title'>{prods.title} ${prods.price}</h5>
                <p className='font-title'>Available stock: {prods.stock}</p>
                <p className='font-title'>Items added:{}</p>

                <button onClick={() => {isAdded ? removeFavorites(prods.id) : addFavorites(prods)}}
                    className='buttonFavorite'>
                    {isAdded ? 'Remove from favorites' : 'Add to favorites'}
                </button>
            </div> 
        </div>
    )
}
export default ItemDetail