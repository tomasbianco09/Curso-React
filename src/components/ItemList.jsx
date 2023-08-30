import React from 'react'
import Item from './Item'

const ItemList = ({ productos }) => {
  return (
    <>
      {productos.map((producto) => {
        return (
            <Item
              key={producto.id}
              id={producto.id}
              nombre={producto.nombre}
              description={producto.description}
              image={producto.image}
              stock={producto.stock}
              precio={producto.precio}
              category={producto.category}
            />
        )
      })
      }
    </>
  )
}

export default ItemList