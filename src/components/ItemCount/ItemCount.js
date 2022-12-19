import './ItemCount.css';
import React, {useState } from "react";
import { getProdsByAlt } from '../../asyncMock';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useContext } from 'react';
import { FavoritesContext } from '../../context/FavoritesContext';

export default function ItemCount ({stock, initial, text, onAddToCart}) {

    const {addFavorites, removeFavorites, isInFavorites} = useContext(FavoritesContext)

    const [isLoading, setIsLoading] = useState(true)
    const [showButton, setShowButton] = useState(false)
    const [prods, setProds] = useState({})
    const [count, setCount] = useState(initial);
    const {alt} = useParams()

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

    const isAdded = () => {
        if (!isInFavorites(prods.id)) {
            setShowButton(true)
        }
    }

    function handleSubstract() {
        if (count > 1) setCount(count - 1);
    }

    function handleAdd() {
        if (count < stock ) setCount(count + 1);
    }

    function addToCart(){}

    return (
        <div>
            <button onClick={handleAdd} className='buttonPlus'>+</button>
            <button onClick={addToCart}>Add to cart</button>
            <button onClick={handleSubstract} className='buttonMinus'>-</button>

            <button onClick={() => {showButton ? removeFavorites(prods.id) : addFavorites(prods)}}
                    className='buttonFavorite'>
                    {showButton ? 'Remove from favorites' : 'Add to favorites'}
            </button>
        </div>
    )
}