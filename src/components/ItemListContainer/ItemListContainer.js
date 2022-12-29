import "./ItemListContainer.css";
import React, { useState } from 'react';
import ItemList from "../ItemList/ItemList";
import NavbarCategory from "../NavbarCategory/NavbarCategory";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { query } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import { where } from "firebase/firestore";
import { getDocs } from "firebase/firestore";

const ItemListContainer = ({initial}) => {

    const [prods, setProds] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()
    useEffect(() => {
        setLoading(true)
        const prodsRef = categoryId && query(collection(db, 'prods'), where('category', '==', categoryId))
            
        getDocs(prodsRef)
            .then(response => {
                const prodsAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data}
                })
                setProds(prodsAdapted)
            })
            .catch(error => {
                console.log(error)
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