import "./ItemDetailContainer.css";
import React, { useEffect, useState } from 'react';
import { getDoc, doc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { db } from '../../services/firebase/firebaseConfig';
import ItemDetail from "../ItemDetail/ItemDetail";
import NavbarCategory from "../NavbarCategory/NavbarCategory";

const ItemDetailContainer = ({initial}) => {
    const [prods, setProds] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const {prodsId} = useParams()
    useEffect(() => {

        const docRef = doc(db, "prods", prodsId)

        getDoc(docRef)
            .then(doc => {

                const data = doc.data()
                const prodAdapted = { id: doc.id, ...data}
                setProds(prodAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [prodsId])

    if(isLoading){
        return <p className='font-title'>Loading...</p>
    }
    
    return(
        <div>
            <NavbarCategory/>
            <ItemDetail prods={prods}/>
        </div>
    )
}
export default ItemDetailContainer