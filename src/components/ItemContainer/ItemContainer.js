import React from 'react';
import { useEffect, useState } from 'react';
import "./ItemContainer.css";

const ShowProducts = () => {

  const [prods, setProds] = useState([]);

  useEffect(() => {

    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=autos`)

    .then(response => {
      return response.json()
    })

    .then(json => setProds(json.results))

    .catch(error => {
      console.log.error(error)
    })
  }, [])

  return (
    <div className='prueba'>
      {
        prods.map(prods => {

          return(
            <div className='card' key={prods.id}>
              <img src={prods.thumbnail} alt={prods.title}/>
              <h2 className='font-size'>{prods.title}</h2>
              <h3 className='font-size'>${prods.price}</h3>
            </div>
          )
        })
      }
    </div>
  )
} 

export default ShowProducts;