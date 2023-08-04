import React from 'react'
import ItemDetail from './ItemDetail'
import { version } from 'react-dom'

const ItemDetailContainer = () => {

  const productos = [
    { id: 1, nombre: "Producto A", description: "Descripcion de Producto A", stock: 2, category: "cat1" },
    { id: 2, nombre: "Producto B", description: "Descripcion de Producto B", stock: 10, category: "cat2" },
    { id: 3, nombre: "Producto C", description: "Descripcion de Producto C", stock: 12, category: "cat3" },
    { id: 4, nombre: "Producto D", description: "Descripcion de Producto D", stock: 32, category: "cat1" },
    { id: 5, nombre: "Producto E", description: "Descripcion de Producto E", stock: 20, category: "cat2" },
    { id: 6, nombre: "Producto F", description: "Descripcion de Producto F", stock: 5, category: "cat3" },
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