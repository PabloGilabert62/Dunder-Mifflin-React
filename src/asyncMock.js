import React from "react"

const prods = () =>
[
  {
    id: "1",
    price: "Price: 20$",
    title: "Delivery Bag",
    imgALT: "Delivery Bag",
    imgURL: "./images/bolsaDelivery.jpg",
    stock: 10
  },
  {
    id: "2",
    price: "Price: 40$",
    title: "Packing Tape",
    imgALT: "Packing Tape",
    imgURL: "./images/cintaEmbalar.jpg",
    stock: 12
  },
  {
    id: "3",
    price: "Price: 15$",
    title: "Papel Kraft",
    imgALT: "Papel Kraft",
    imgURL: "./images/papelKraft.jpg",
    stock: 17
  },
  {
    id: "4",
    price: "Price: 60$",
    title: "Ream A4",
    imgALT: "Ream A4",
    imgURL: "./images/caja Resma Punax A4.jpg",
    stock: 4
  },
  {
    id: "5",
    price: "Price: 25$",
    title: "Black Film",
    imgALT: "Black Film",
    imgURL: "./images/filmNegro.jpg",
    stock: 20
  },
  {
    id: "6",
    price: "Price: 25$",
    title: "White Film",
    imgALT: "White Film",
    imgURL: "./images/filmTransparente.jpg",
    stock: 21
  }
]

export const getProds = () =>
{
  return new Promise((resolve)=>
  {
    setTimeout(() =>                                                                                                                        
  {
    resolve(prods);
  }, 2000)
  })
}

export const getNoteById = () => {}