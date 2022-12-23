import React from "react";
import './ItemList.css';
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";

const ItemDetail = ({ prods }) => {
    return (
        <div>
            { 
                prods.map(prods => (
                    <ItemDetailContainer prods={prods} key={prods.id}/>
                )) 
            } 
        </div>
    )
}

export default ItemDetail