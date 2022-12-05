import React from 'react';
//import { getProdsById } from '../../asyncMock';
import { getProdsByAlt } from '../../asyncMock';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ButtonCart from '../ButtonCart/ButtonCart';


/* --  -- */
const NoteDetailContainer = () => {
    
    const [prods, setProds] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const { alt } = useParams()

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
        return <p>Loading...</p>
    }

    /* -- EACH DETAIL CARD -- */
        return (
            <div>
                <img src={prods.src} alt={prods.alt}/>
                <h1>{prods.title}</h1>
                <p>{prods.price}</p>
                <ButtonCart/>
            </div>
        )
    /* ------------------ */
}

export default NoteDetailContainer