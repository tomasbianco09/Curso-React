import React from 'react'
import ItemDetail from './ItemDetail'
import { version } from 'react-dom'

const ItemDetailContainer = () => {

  const productos = [
    { id: 1, nombre: "BUZO SIMPLE", description: "100% algodon", stock: 5, category: "cat1" },
    { id: 2, nombre: "REMERA SIMPLE", description: "100% algodon", stock: 15, category: "cat2" },
    { id: 3, nombre: "PANT CARGO", description: "100% algodon", stock: 8, category: "cat3" },
    { id: 4, nombre: "BUZO OVERSIZE", description: "100% algodon", stock: 4, category: "cat1" },
    { id: 5, nombre: "REMERA OVERSIZE", description: "100% algodon", stock: 11, category: "cat2" },
    { id: 6, nombre: "JEAN OVERSIZE", description: "100% algodon", stock: 16, category: "cat3" },
  ]


  const getProductos = new Promise((resolve, reject) => {
    if (productos.lenght > 0) {
      setTimeout(() => {
        resolve(productos)
      }, 2000)
    } else {
      reject(new Error("No hay datos"))
    }
  })

  getProductos
    .then((resolve) => {
      console.log(resolve)
    })
    .catch((error) => {
      console.log(error)
    })

  return (
    <>
      <ItemDetail
        productos={productos}
      />
    </>
  )
}

export default ItemDetailContainer