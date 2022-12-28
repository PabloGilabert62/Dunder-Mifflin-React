import "./ItemListContainer.css";
import React, { useEffect, useState } from 'react';
import { getDoc, doc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { db } from '../../services/firebase/firebaseConfig';
import ItemList from "../ItemList/ItemList";
import NavbarCategory from "../NavbarCategory/NavbarCategory";

const ItemListContainer = ({initial}) => {

    const [prods, setProds] = useState([])
    const [loading, setLoading] = useState(true)
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
        setLoading(false)
      })
    }, [prodsId])

    if(loading){
      return <p className='font-title'>Loading...</p>
    }
    
    return(
        <div>
            <NavbarCategory/>
            <ItemList prods={prods}/>
        </div>
    )
}
export default ItemListContainer