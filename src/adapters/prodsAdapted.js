export const createAdaptedProdFromFirestore = (doc) => {

    const data = doc.data()

    const prodAdapted = {
        src: data.src,
        alt: data.alt,
        title: data.title,
        id: doc.id
    }

    return prodAdapted
}