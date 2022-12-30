import './ItemDetailContainer.css';
import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import React from 'react';
import NavbarCategory from '../NavbarCategory/NavbarCategory';

const ItemDetailContainer = () => {
  
  const [prods, setProds] = useState([])

  return(
    <div>
      <NavbarCategory/>
      {/* <ItemDetail prods={prods}/> */}
      <ItemDetail {...prods}/>
    </div>
  )
}

export default ItemDetailContainer