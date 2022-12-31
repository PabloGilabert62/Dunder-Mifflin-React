import './ItemDetailContainer.css';
import { useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import React from 'react';
import NavbarCategory from '../NavbarCategory/NavbarCategory';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProdsById } from '../../services/firebase/firestore/prods';

const ItemDetailContainer = () => {
  
  const [prods, setProds] = useState([])
  const [loading, setLoading] = useState(true)
  const {prodsId} = useParams()

  useEffect(() => {

    getProdsById(prodsId)

    .then(prods => {
      setProds(prods)
    })
    .catch(error => {
      console.error(error)
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