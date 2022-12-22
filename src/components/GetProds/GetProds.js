import { useState, useEffect } from 'react';
import ProdsList from '../ProdsList/ProdsList';
import { useParams } from 'react-router-dom';
import './GetProds.css'
import React from 'react';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';

const GetProds = () => {
  
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
          <ProdsList prods={prods}/>
      </div>
  )
}

export default GetProds