import "./ItemListContainer.css";
import React, { useState } from 'react';
import ItemList from "../ItemList/ItemList";
import NavbarCategory from "../NavbarCategory/NavbarCategory";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from '../../services/firebase/firebaseConfig';

const ItemListContainer = ({initial}) => {

    const [prods, setProds] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoryId} = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionRef = collection(db, "prods")

        getDocs(collectionRef)
        .then(response => {
            console.log(response)
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