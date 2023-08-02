import React from 'react'
import Item from './Item'
import { Container } from "@chakra-ui/react"

const ItemList = ({productos}) => {
  return (
    <>
      
        {productos.map((producto) => {
          return (

              <Item
                key={producto.id}
                nombre={producto.nombre}
                description={producto.description}
                stock={producto.stock}
              />
          
          )
        })}
    </>
  )
}

export default ItemList