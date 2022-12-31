import './Checkout.css';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { createOrder } from '../../services/firebase/firestore/order';

const Checkout = () => {

    const { items, total, clearCart } = useContext(CartContext)
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const handleCreateOrder = async () => {
        setLoading(true)
        
        createOrder(async)

        .then(prods => {
            setProds(prods)
          })
          .catch(error => {
            console.error(error)
          })
          .finally(() => {
            setLoading(false)
          })
    }
        
    if(loading){
        return(
            <h1>Loading order...</h1>
        ) 
    }

    // const update = () => {
    //     const prodsRef = doc(db, "prods", "a45s6da16qw456")
    //     updateDoc(prodsRef, {stock: 10})
    // }

    return(
        <div>
            <h2>Checkout</h2>
            <button onClick={handleCreateOrder}>Finalize</button>
            {/* <button onClick={update}>Update stock</button> */}
        </div>
    )
}

export default Checkout