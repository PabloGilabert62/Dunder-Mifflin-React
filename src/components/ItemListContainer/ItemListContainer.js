import "./ItemListContainer.css";
import React, { useState } from 'react';
import ItemList from "../ItemList/ItemList";
import NavbarCategory from "../NavbarCategory/NavbarCategory";
import { getProds } from "../../services/firebase/firestore/prods";

const ItemListContainer = ({initial}) => {

    const [prods, setProds] = useState([])

    getProds()

    return(
        <div>
            <NavbarCategory/>
            <ItemList prods={prods}/>
        </div>
    )
}
export default ItemListContainer