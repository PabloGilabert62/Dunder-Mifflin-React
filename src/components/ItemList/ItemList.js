import React from "react";
import './ItemList.css';
import Item from "../Item/Item";
import { memo } from "react";

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

export default memo(ItemList)