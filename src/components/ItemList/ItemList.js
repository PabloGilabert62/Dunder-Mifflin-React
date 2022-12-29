import React from "react";
import './ItemList.css';
import Item from "../Item/Item";

const ItemList = ({ prods }) => {
    return (
        <div>
            { 
                prods.map(prods => (
                    <Item prods={prods} key={prods.id}/>
                )) 
            } 
        </div>
    )
}

export default ItemList