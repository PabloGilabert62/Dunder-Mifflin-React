import './ItemDetailContainer.css';
import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import React from 'react';
import NavbarCategory from '../NavbarCategory/NavbarCategory';
import { useParams } from 'react-router-dom';
import { doc } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';
import { getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {
  
  const [prods, setProds] = useState([])
  const [loading, setLoading] = useState(true)

  const {productId} = useParams()
    useEffect(() => {

      const prodsRef = doc(db, 'prods', productId) 

      getDoc(prodsRef)
      .then(response => {

        const data = response.data()
        const prodsAdapted = { id: response.id, ...data}
        setProds(prodsAdapted)
        
      })

      .catch(error => {
        console.log(error)
      })

      .finally(() => {
        setLoading(false)
      })

    }, [productId])

    if(loading) {
      return <h1>Loading...</h1>
    }
 
  return(
    <div>
      <NavbarCategory/>
      {/* <ItemDetail prods={prods}/> */}
      <ItemDetail {...prods}/>
    </div>
  )
}

export default ItemDetailContainer