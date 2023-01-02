import './Checkout.css';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { collection, getDocs, query, where, documentId, writeBatch, addDoc } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';
import { useNavigate } from 'react-router-dom';
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
            // SPINNER
            <button className="spinner-margin btn btn-primary" type="button" disabled>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Loading...
            </button>
        ) 
    }

    return(
        // CHECKOUT FORM
        <div className='animate__animated animate__backInUp'>
            <div className='checkout'>Checkout form</div>

            <div className='checkout-flex'>
                <form className='input-checkout'>
                    {/* NAME */}
                    <div>
                        <div className='title-input'>Name</div>
                        <input 
                            className='input-width'
                            placeholder='Mark' 
                            value={name} 
                            onChange={event => {setName(event.target.value)}}>
                        </input>
                    </div>

                    {/* LASTNAME */}
                    <div>
                        <div className='title-input'>Lastname</div>
                        <input 
                            className='input-width'
                            placeholder='Otto' 
                            value={lastname} 
                            onChange={event => {setLastname(event.target.value)}}>
                        </input>
                    </div>

                    {/* EMAIL */}
                    <div>
                        <div className='title-input'>Email</div>
                        <input 
                            className='input-width'
                            placeholder='someone123@hotmail.com' 
                            value={email} 
                            onChange={event => {setEmail(event.target.value)}}>
                        </input>
                    </div>

                    {/* EMAIL VERIFICATION */}
                    <div>
                        <div className='title-input'>Repeat email</div>
                        <input 
                            className='input-width'
                            placeholder='someone123@hotmail.com' 
                            value={repeatEmail} 
                            onChange={event => {setRepeatEmail(event.target.value)}}>
                        </input>
                    </div>

                    {
                        name !== "" &&
                        lastname !== "" && 
                        email !== "" && 
                        repeatEmail !== "" && 
                        email === repeatEmail &&
                        <button className='finalize-order' onClick={handleCreateOrder}>Finalize order</button>
                    }
                </form>
            </div>

        </div>
    )
}

export default Checkout