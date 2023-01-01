import './ItemDetailContainer.css';
import { useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import React from 'react';
import NavbarCategory from '../NavbarCategory/NavbarCategory';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProdsById } from '../../services/firebase/firestore/prods';
import { useAsync } from '../../hooks/useAsync';

const ItemDetailContainer = () => {

  // const { prodsId } = useParams()
  // const getProdsWithId = () => getProdsById(prodsId)
  // const { data: prods, error, loading } = useAsync(getProdsWithId, [prodsId])
  
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
    return(
      <button className="spinner-margin btn btn-primary" type="button" disabled>
        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        Loading...
      </button>
    )  
  }

  // if(error){
  // return <h1>Error, press F5 to reload</h1>}

  return(
    <div>
      <NavbarCategory/>
      <ItemDetail prods={prods}/>
    </div>
  )
}

export default ItemDetailContainer