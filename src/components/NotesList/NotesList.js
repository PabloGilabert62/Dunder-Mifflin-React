import Note from "../Note/Note";
import React from "react";

const NotesList = ({ prods }) => {
    return (
        <div key={prods.id}>
            { 
                prods.map(prods => (
                    <Note prods={prods}/>
                )) 
            } 
        </div>
    )
}

export default NotesList