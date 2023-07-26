import React from 'react'
import ItemList from './ItemList'

const ItemListContainer = () => {

  const productos = [
    { id: 1, nombre: "buzo A", description: "buzo 2", stock: 2 },
    { id: 2, nombre: "buzo B", description: "buzo 3", stock: 4 },
    { id: 3, nombre: "buzo C", description: "buzo 1", stock: 5 }
  ]

  const getProductos = new Promise((resolve, reject) => {
    if (productos.length > 0) {
      setTimeout(() => {
        resolve(productos)
      }, 2000)
    } else {
      reject(new Error("No hay datos"))
    }
  })

  getProductos
    .then((res) => {
      console.log(res)
    })
    .catch((error) => {
      console.log(error)
    })

  return (
    <>
      <ItemList productos={productos} />
    </>
  )
}

export default ItemListContainer