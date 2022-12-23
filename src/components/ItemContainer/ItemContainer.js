import './ItemContainer.css';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import React from 'react';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';
import NavbarCategory from '../NavbarCategory/NavbarCategory';

const ItemContainer = () => {
  
  const [prods, setProds] = useState([])

  const { categoryId } = useParams()
  useEffect(() => {

    const collectionRef = categoryId ? 
    query(collection(db, "prods"), where("category", "==", categoryId ))
    : collection(db, "prods")
    
    getDocs(collectionRef)
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
  }, [categoryId])

  return(
    <div>
      <NavbarCategory/>
      <h1>{prods.title}</h1>
      <ItemList prods={prods}/>
    </div>
  )
}

export default ItemContainer