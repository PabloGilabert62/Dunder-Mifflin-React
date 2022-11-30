import "./Products.css";
import React from "react";
import { useEffect, useState } from "react";



const Products = () => {

    const [input, setInput] = useState('');
    const [prods, setProds] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // useEffect(() => {

    // }, [])

    const handleOnSubmit = (e) => {

        e.preventDefault();
        setIsLoading(true);

        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${input}`)

        .then(response => {
            return response.json();
        })

        .then(json => setProds(json.results))

        .catch(error => {
            console.error(error);
        })

        .finally(() => {
            setIsLoading(false);
        })

    }

    if(isLoading){
        return(
            <div>Loading...</div>
        )
    }

    return(
        <div>
            <h1>Mercado Libre Items</h1>
            <form onSubmit={handleOnSubmit}>
                <input value={input} onChange={(e) => setInput(e.target.value)}></input>
                <button type="submit">Search</button>
            </form>

            <div>
                {
                    prods.map(prods => {
                        return (
                            <div key={prods.id}>
                                <img src={prods.thumbnail} alt={prods.title}/>
                                <h2>{prods.title}</h2>
                                <h3>$ {prods.price}</h3>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Products;