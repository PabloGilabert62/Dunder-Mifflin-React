import { useState, useEffect } from "react";
import React from "react";
import ItemList from "../ItemList/ItemList";
import { getProds } from "../../asyncMock";

const ItemContainer = () => 
{
  const [prods, setProds] = useState([]); 

  useEffect(() => 
  {
    getProds()

    .then(response => 
    {
      setProds(response);
    })

    .catch(error => 
    {
      console.log(error);
    })

  }, [])

  return(
    <div>
      <ItemList prods={prods}/>
    </div>
  )
}

export default ItemContainer;