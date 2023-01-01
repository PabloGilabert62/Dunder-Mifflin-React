import './Checkout.css';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { collection, getDocs, query, where, documentId, writeBatch, addDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Checkout = () => {

    const { items, total, clearCart } = useContext(CartContext)
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState ("")
    const [lastname, setLastname] = useState ("")
    const [email, setEmail] = useState ("")
    const [repeatEmail, setRepeatEmail] = useState ("")

    const navigate = useNavigate()

    const handleCreateOrder = async () => {
        setLoading(true)
        try{
            const orderObjects = {
                buyer: {
                    name: name,
                    lastname: lastname,
                    email: email,
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
                Swal.fire({
                    title: 'Thanks to buy in Dunder Mifflin!',
                    html: '<video class="buy-video" src="../images/michael-sprays.mp4" loop autoplay></video>',
                    background: 'rgb(29, 29, 29)',
                    color: 'white',
                    confirmButtonText: "Great!",
                    confirmButtonColor: "rgb(6, 76, 156)",
                    allowOutsideClick: false
                })
                navigate("/")
                console.log(orderAdded.id)
            }
        } catch(error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }
    if(loading){
        return(
            <h1>Loading order...</h1>
        ) 
    }

    return(
        <div>
            <h2 className='checkout'>Checkout form</h2>

            <form>
                <div>
                    <div>Name</div>
                    <input value={name} onChange={event => {setName(event.target.value)}} ></input>
                </div>

                <div>
                    <div>Lastname</div>
                    <input value={lastname} onChange={event => {setLastname(event.target.value)}}></input>
                </div>

                <div>
                    <div>Email</div>
                    <input type="email" value={email} onChange={event => {setEmail(event.target.value)}}></input>
                </div>

                <div>
                    <div>Repeat email</div>
                    <input type="email" value={repeatEmail} onChange={event => {setRepeatEmail(event.target.value)}}></input>
                </div>

                {
                    name !== "" &&
                    lastname !== "" && 
                    email !== "" && 
                    repeatEmail !== "" && 
                    email === repeatEmail &&
                    <button onClick={handleCreateOrder}>Finalize order</button>
                }
            </form>

        </div>
    )
}

export default Checkout