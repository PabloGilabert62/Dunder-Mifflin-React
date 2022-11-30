import React from "react";
import "./ItemList.css";
import Item from "../Item/Item";

const ItemList = ({ prods }) => {

    return(
        <div>
            {prods.map(prods => (<Item key={prods.id} prods={prods}/>))}
        </div>
    )
}

export default ItemList;