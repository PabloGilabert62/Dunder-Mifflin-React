import Note from "../Note/Note";
import React from "react";

const NotesList = ({ prods }) => {
    return (
        <div>
            { 
                prods.map(prods => (
                    <Note prods={prods} key={prods.id}/>
                )) 
            } 
        </div>
    )
}

export default NotesList