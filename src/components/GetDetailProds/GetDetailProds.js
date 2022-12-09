import React from 'react';
import { getProdsByAlt } from '../../asyncMock';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './GetDetailProds.css';
import FinalizePurchase from '../FinalizePurchase/FinalizePurchase';

/* -- GET EACH DETAIL CARD -- */
const GetDetailProds = () => {
    
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

    if(isLoading) {
        return <p className='loading'>Loading...</p>
    }


    /* -- GET EACH DETAIL CARD -- */
    return (
        <div className='cards-details-flex'>
            <div className='cards-details'>
                <img src={prods.src} alt={prods.alt}/>
                <h5 className='font-title'>{prods.title} {prods.price}</h5>
                <FinalizePurchase stock={prods.stock}/>
            </div>
        </div>
    )
}

export default GetDetailProds