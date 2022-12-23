import React, { useEffect, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { getDoc, doc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { db } from '../../services/firebase/firebaseConfig';

const ItemDetailContainer = ({initial}) => {

    const {addItems} = useContext(CartContext)
    const {prods, setProds} = useState({})

    const {prodsId} = useParams()
    useEffect(() => {

        const docRef = doc(db, "prods", prodsId)

        getDoc(docRef)
            .then(doc => {

                const data = doc.data()
                const prodAdapted = { id: doc.id, ...data}
                setProds(prodAdapted)
            })
            .catch(error => {
                console.log(error)
            })
    }, [prodsId])

    const handleAddToCart = (quantity) => {
        addItems(prods,quantity)
    }
    
    //EACH DETAIL CARD
    return(
        <div className='cards-details-flex'>
            <div className='cards-details '>
                <img alt={prods.alt}/>
                <p className='font-title'>{prods.title} ${prods.price}</p>
                <div className='line'></div>
                <p className='font-title'>Available stock: {prods.stock}</p>
                <div className='line'></div>
                <ItemCount initial={1} stock={prods.stock} onAddToCart={handleAddToCart}/>
            </div>
        </div>
    )
}

export default ItemDetailContainer