import React from 'react'
import ItemDetail from './ItemDetail'
import { Flex } from '@chakra-ui/react'

const ItemDetailContainer = () => {

    const productos = [
      { id: 1, nombre: "buzo A", description: "buzo 2", stock: 2, category: "cat1" },
      { id: 2, nombre: "buzo B", description: "buzo 3", stock: 4, category: "cat2" },
      { id: 3, nombre: "buzo C", description: "buzo 1", stock: 5, category: "cat3" },
      { id: 4, nombre: "buzo D", description: "buzo 2", stock: 2, category: "cat1" },
      { id: 5, nombre: "buzo E", description: "buzo 3", stock: 4, category: "cat2" },
      { id: 6, nombre: "buzo F", description: "buzo 1", stock: 5, category: "cat3" },
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
      <Flex>
          <ItemDetail productos={productos} />
      </Flex>
    )
}

export default ItemDetailContainer