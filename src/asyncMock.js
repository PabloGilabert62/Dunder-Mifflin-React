const prods = [
    {
      id: '1',
      title: 'Delivery Bag',
      alt: 'delivery-bag',
      src: '/images/bolsaDelivery.jpg',
      stock: "5",
      price: '$20'
    }, 
    {
      id: '2',
      title: 'Paper Box A4',
      alt: 'paper-box-a4',
      src: '/images/Caja Resma Punax A4.jpg',
      stock: "7",
      price: '$120'
    },
    {
      id: '3',
      title: 'Ducting Tape',
      alt: 'ducting-tape',
      src: '/images/cintaEmbalar.jpg',
      stock: "9",
      price: '$40'
    },
    {
      id: '4',
      title: 'Dark Film',
      alt: 'dark-film',
      src: '/images/filmNegro.jpg',
      stock: "3",
      price: '$70'
    }, 
    {
      id: '5',
      title: 'White Film',
      alt: 'white-film',
      src: '/images/filmTransparente.jpg',
      stock: "6",
      price: '$60'
    },
    {
      id: '6',
      title: 'Paper Kraft',
      alt: 'paper-kraft',
      src: '/images/papelKraft.jpg',
      stock: "11",
      price: '$15'
    }
  ]
  
export const getProds = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(prods)
      }, 500)
    })
}

export const getProdsByTitle = (titleId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(prods.filter(prods => prods.title === titleId))
    }, 500)
  })
}

export const getProdsByAlt = (alt) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(prods.find(prods => prods.alt === alt))
    }, 500)
  })
}