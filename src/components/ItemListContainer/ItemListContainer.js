import "./ItemListContainer.css";
import React from "react";
import ItemList from "../ItemList/ItemList";
import NavbarCategory from "../NavbarCategory/NavbarCategory";
import { useParams } from "react-router-dom";
import { getProds } from "../../services/firebase/firestore/prods";
import { useEffect } from "react";
import { useState } from "react";
import { useAsync } from '../../hooks/useAsync';

const ItemListContainer = ({initial}) => {

    // const { categoryId } = useParams()
    // const getProdsByCategory = () => getProds(categoryId)
    // const { data: prods, error, loading } = useAsync(getProdsByCategory, [categoryId])

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

    // if(error){
    // return <h1>Error, press F5 to reload</h1>}

    return(
        <div>
            <NavbarCategory/>
            <ItemList prods={prods}/>
        </div>
    )
}

export default ItemListContainer