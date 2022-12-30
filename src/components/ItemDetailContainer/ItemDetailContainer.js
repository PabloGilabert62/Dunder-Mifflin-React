import './ItemDetailContainer.css';
import { useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import React from 'react';
import NavbarCategory from '../NavbarCategory/NavbarCategory';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';

const ItemDetailContainer = () => {
  
  const [prods, setProds] = useState([])
  const [loading, setLoading] = useState(true)
  const {prodsId} = useParams()

  useEffect(() => {
    const docRef = doc(db, "prods", prodsId)

    getDoc(docRef)

    .then(doc => {

      const data = doc.data()
      const prodsAdapted = {id: doc.id, ...data}
      setProds(prodsAdapted)

    })
    .catch(error => {
      console.log(error)
    })

    .finally(() => {
      setLoading(false)
    })

  }, [prodsId])

  if(loading){
    return <h1>Loading...</h1>
  }

  return(
    <div>
      <NavbarCategory/>
      <ItemDetail prods={prods}/>
    </div>
  )
}

export default ItemDetailContainer