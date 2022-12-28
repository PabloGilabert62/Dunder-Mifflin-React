import React from "react"
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from "../firebaseConfig";

export const getProds = (categoryId) => {

    return new Promise((resolve, reject) => {

        const collectionRef = categoryId 
        ? query(collection(db, "prods"), where("category", "==", categoryId ))
        : collection(db, "prods")
    
    getDocs(collectionRef)
        .then(response => {
            const prodsAdapted = response.docs.map(doc => {
                const data = doc.data()
                return { id: doc.id, ...data}
            })
            resolve(prodsAdapted)
        })
        .catch(error => {
            reject(error)
        })
    })
}

export const getProdsById = () => {
    
}