import { useState, useEffect } from 'react';
import ProdsList from '../ProdsList/ProdsList';
import { getProds, getProdsByTitle } from '../../asyncMock';
import { useParams } from 'react-router-dom';
import './GetProds.css'
import React from 'react';

const GetProds = () => {
  
    const [prods, setProds] = useState([])
    const { titleId } = useParams()

    useEffect(() => {

      if(!titleId) {

        getProds()

        .then(response => {
          setProds(response)
        })

        .catch(error => {
          console.log(error)
        })  

      } else {
        
        getProdsByTitle(titleId)

        .then(response => {
          setProds(response)
        })

        .catch(error => {
          console.log(error)
        })  
      }
    }, [titleId])

    return(
        <div>
           <ProdsList prods={prods}/>
        </div>
    )
}

export default GetProds