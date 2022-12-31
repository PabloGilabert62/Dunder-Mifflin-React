import { getDocs, collection, query, where, getDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { createAdaptedProdFromFirestore } from "../../../adapters/prodsAdapted";

export const getProds = (categoryId) => {
    return new Promise((resolve, reject) => {

        const collectionRef = categoryId 
        ? query(collection(db, "prods"), where("category", "==", categoryId))
        : collection(db, "prods")

        getDocs(collectionRef)
        .then(response => {

            console.log(response.docs)

            const prodsAdapted = response.docs.map(doc => {
                return createAdaptedProdFromFirestore(doc)
            })

            resolve(prodsAdapted)
        })

        .catch(error => {
            reject(error)
        })
    })
}

export const getProdsById = (prodsId) => {
    return new Promise((resolve, reject) => {

        const docRef = doc(db, "prods", prodsId)
        getDoc(docRef)

        .then(doc => {
        const data = doc.data()
        const prodsAdapted = {id: doc.id, ...data}
        resolve(prodsAdapted)
        })

        .catch(error => {
        reject(error)
        })
    }
)}