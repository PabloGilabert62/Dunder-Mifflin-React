import React from "react";
import "./Item.css";
import Counter from "../Counter/Counter";

const Item = ({ prods }) => {

    return(

        <div className="prods">

            <h2>{prods.title}</h2>
            <p>{prods.price}</p>
            <p>Avalaible stock: {prods.stock}</p>
            <img alt={prods.imgALT} src={prods.imgURL}/>
            <Counter stock={prods.stock}/>

        </div>
    )
}
export default Item;