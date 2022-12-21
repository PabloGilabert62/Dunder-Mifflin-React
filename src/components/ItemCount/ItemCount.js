import './ItemCount.css';
import React from 'react';
import { useState } from 'react';
import { getProdsByAlt } from '../../asyncMock';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useContext } from 'react';
import { FavoritesContext } from '../../context/FavoritesContext';

const ItemCount = ({stock, initial, onAddToCart}) => {

    // const {addFavorites, removeFavorites, isInFavorites} = useContext(FavoritesContext)

    // const [isLoading, setIsLoading] = useState(true)
    // const [showButton, setShowButton] = useState(false)
    // const [prods, setProds] = useState({})
    // const {alt} = useParams()
    const [count, setCount] = useState(initial);

    // useEffect(() => {
    //     getProdsByAlt(alt)
    //         .then(response => {
    //             setProds(response)
    //         })
    //         .catch(error => {
    //             console.error(error)
    //         })
    //         .finally(() => {
    //             setIsLoading(false)
    //         })
    // }, [alt])

    // const isAddedFavorites = () => {
    //     if (!isInFavorites(prods.id)) {
    //         setShowButton(true)
    //     }
    // }

    const handleSubstract = () => {
        if (count > 1) {
            setCount(count - 1);
        } 
    }

    const handleAdd = () => {
        if (count < stock) {
            setCount(count + 1);
        } 
    }

    // return (
    //     <div>
    //         <p className='font-title'>Items added: {count}</p>
    //         <button onClick={handleAdd} className='buttonPlus'>+</button>
    //         <button onClick={()=> {onAddToCart(count)}} className='buttonAdd'>Add to cart</button>
    //         <button onClick={handleSubstract} className='buttonMinus'>-</button>

    //         <button onClick={() => {showButton ? removeFavorites(prods.id) : addFavorites(prods)}}
    //             className='buttonFavorite'>
    //             {showButton ? 'Remove from favorites' : 'Add to favorites'}
    //         </button>
    //     </div>
    // )

    return (
        <div>
            <p className='font-title'>Items added: {count}</p>
            <button onClick={handleAdd} className='buttonPlus'>+</button>
            <button onClick={()=> onAddToCart(count)} className='buttonAdd'>Add to cart</button>
            <button onClick={handleSubstract} className='buttonMinus'>-</button>

            {/* <button onClick={() => {showButton ? removeFavorites(prods.id) : addFavorites(prods)}}
                className='buttonFavorite'>
                {showButton ? 'Remove from favorites' : 'Add to favorites'}
            </button> */}
        </div>
    )

}

export default ItemCount