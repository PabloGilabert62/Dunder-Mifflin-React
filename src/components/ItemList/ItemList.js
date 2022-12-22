import ItemList from "../ItemList/ItemList";
import React from "react";
import './ItemList.css';
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemList = ({ prods }) => {
    return (
        <div>
            { 
                prods.map(prods => (
                    <ItemDetail prods={prods} key={prods.id}/>
                )) 
            } 
        </div>
    )
}

export default ItemList