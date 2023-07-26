import React from 'react'
import Item from './Item'
import { Container } from "@chakra-ui/react"

const ItemList = ({productos}) => {
  return (
    <>
      <Container>
        {productos.map((producto) => (
          <Item
            nombre={producto.nombre}
            description={producto.description}
            stock={producto.stock}
          />
        ))}
      </Container>
    </>
  );
}

export default ItemList