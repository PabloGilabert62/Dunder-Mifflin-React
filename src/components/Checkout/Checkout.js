import './Checkout.css';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { collection, getDocs, query, where, documentId, writeBatch, addDoc } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {

    const { items, total, clearCart } = useContext(CartContext)
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const handleCreateOrder = async () => {

        setLoading(true)

        try{
            const orderObjects = {
                buyer: {
                    name: "Pablo Gilabert",
                    mail: "pablo.hg@hotmail.es",
                    phone: "123456789"
                },
                items: items,
                total: total()
            }
    
            const batch = writeBatch(db)
    
            const ids = items.map(item => item.id)
    
            const prodsRef = query(collection(db, "prods"), where(documentId(), "in", ids))
            const prodsAddedToCartFirestore = await getDocs(prodsRef)
    
            const { docs } = prodsAddedToCartFirestore
    
            const outOfStock = []
    
            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
    
                const prodsAddedToCart = items.find(item => item.id === doc.id)
                const prodsQuantity = prodsAddedToCart.count
    
                if(stockDb >= prodsQuantity){
                    batch.update(doc.ref, { stock: stockDb - prodsQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }
            })
    
            if(outOfStock.length === 0){
                await batch.commit()
    
                const orderRef = collection(db, "orders")
                const orderAdded = await addDoc(orderRef, orderObjects)

                clearCart()

                setTimeout(() => {
                    useNavigate("/")
                }, 1000)

                console.log(orderAdded.id)

            } else {
                alert("Products out of stock")
            }
        } catch(error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }
        
    if(loading){
        return(
            <h2>Loading order...</h2>
        ) 
    }

    return(
        <div>
            <h2>Checkout</h2>
            <button onClick={handleCreateOrder}>Finalize</button>
        </div>
    )
}

export default Checkout