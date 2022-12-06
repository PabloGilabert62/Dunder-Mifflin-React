import CardList from "../CardList/CardList";
import React from "react";
import './ProdsList.css';

const NotesList = ({ prods }) => {
    return (
        <div>
            { 
                prods.map(prods => (
                    <CardList prods={prods} key={prods.id}/>
                )) 
            } 
        </div>
    )
}

export default NotesList