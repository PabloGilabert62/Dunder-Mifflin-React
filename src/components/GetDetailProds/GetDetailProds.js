import './GetDetailProds.css';
import React from 'react';
import { getProdsByAlt } from '../../asyncMock';
import { useParams } from 'react-router-dom';
import { useState, useEffect, useContext} from 'react';
import { FavoritesContext } from '../../context/FavoritesContext';
import { CartContext } from '../../context/CartContext';

/* -- GET EACH DETAIL CARD -- */
const GetDetailProds = () => {
    
    const [count, setCount] = useState(0)
    const [prods, setProds] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const {alt} = useParams()

    const [showButton, setShowButton] = useState(true)

    /* -- TO ADD ITEMS TO FAVORITES -- */
    const {addFavorites, isInFavorites, removeFavorites} = useContext(FavoritesContext)
    const {addItems} = useContext(CartContext)

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

    if(isLoading) {
        return <p className='loading'>Loading...</p>
    }

    /* ------------------------------------------------------------------------------- */
    const isAdded = isInFavorites(prods.id)

    /* ------------------------------------------------------------------------------- */
    const add = () => { 
        (count < prods.stock) ? setCount(count + 1): setCount(count)
    }

    /* ------------------------------------------------------------------------------- */
    const substract = () => { 
        (count > 0) ? setCount (count - 1) : setCount(count)
    }

    /* ------------------------------------------------------------------------------- */
    const addToCart = () => {
        if(count != 0){
            addItems({...prods, count})
            setShowButton(false)
        }
    }
   
    /* -- GET EACH DETAIL CARD -- */
    return (
        <div className='cards-details-flex'>
            <div className='cards-details'>

                <img src={prods.src} alt={prods.alt}/>
                <h5 className='font-title'>{prods.title} {prods.price}</h5>
                <p className='font-title'>Available stock: {prods.stock}</p>
                <p className='font-title'>Items added: {count}</p>

                {/* CART BUTTON */}
                {showButton && <div>
                    <button onClick={() => {add()}} className='buttonPlus'>+</button>

                    <button onClick={() => {showButton ? addToCart() : setShowButton(false)}}>Add to cart</button>

                    <button onClick={() => {substract()}} className='buttonMinus'>-</button>
                </div>}

                {/* FAVORITE BUTTON */}
                <button onClick={() => {isAdded ? removeFavorites(prods.id) : addFavorites(prods)}} 

                    className='buttonFavorite'>
                    {isAdded ? 'Remove from favorites' : 'Add to favorites'}

                </button>
                
            </div>
        </div> 
    )
}

export default GetDetailProds