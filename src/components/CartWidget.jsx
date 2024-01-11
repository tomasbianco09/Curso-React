import { Box, Flex, Spacer } from '@chakra-ui/react'
import React from 'react'
import { useContext } from "react";
import { CartContext } from '../context/CartProvider';
import { Link } from 'react-router-dom'


const CartWidget = () => {
  const [cart, setCart] = useContext(CartContext);

  // Control de cantidad de items en el carrito para inidcarle al CartWidget si debe mostrarse o quedarse oculto.

  const quantity = cart.reduce((acc, current) => {
    return acc + current.quantity;
  }, 0);

  return (
    <Flex>
        <Link to={'/cart'} style={{display: quantity > 0 ? 'block' : 'none'}}>
          <Box>
            <i className='bx bx-basket bx-sm'></i>
          </Box>
        </Link>
          <Spacer/>

          <Box style={{display: quantity > 0 ? 'block' : 'none'}}>
          <p>{quantity}</p>
          </Box>

    </Flex>
  )
}

export default CartWidget