import './ItemDetailContainer.css';
import React from 'react';
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getProdsByAlt } from '../../asyncMock';

const ItemDetailContainer = () => {

    const [prods, setProds] = useState({})
    const [isLoading, setIsLoading] = useState(true)
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

    return (
        <div className='loading'>
            {isLoading ? <p>Loading...</p> :  <ItemDetail prods={prods}/>}
        </div>
    )
}

export default ItemDetailContainer