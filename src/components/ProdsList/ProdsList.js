import ItemList from "../ItemList/ItemList";
import React from "react";
import './ProdsList.css';

const NotesList = ({ prods }) => {
    return (
        <div>
            { 
                prods.map(prods => (
                    <ItemList prods={prods} key={prods.id}/>
                )) 
            } 
        </div>
    )
}

export default NotesList