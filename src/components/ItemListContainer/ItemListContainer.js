import "./ItemListContainer.css";
import React, { useState } from 'react';
import ItemList from "../ItemList/ItemList";
import NavbarCategory from "../NavbarCategory/NavbarCategory";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getProds } from "../../services/firebase/firestore/prods";

const ItemListContainer = ({initial}) => {

    const [prods, setProds] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoryId} = useParams()

    useEffect(() => {
        
        setLoading(true)
        getProds(categoryId)

        .then(prods => {
            setProds(prods)
        })
        .catch(error => {
            console.error(error)
        })
        .finally(() => {
            setLoading(false)
        })

    }, [categoryId])

    if(loading) {
        return <h1>Loading...</h1>
    }

    return(
        <div>
            <NavbarCategory/>
            <ItemList prods={prods}/>
        </div>
    )
}

export default ItemListContainer