import { Box, Flex, Spacer } from '@chakra-ui/react'
import React from 'react'

const CartWidget = () => {
  return (
    <Flex>
        <Box>
        <span className="material-symbols-outlined"> shopping_cart </span>
        </Box>
        <Spacer/>
        <Box>
        <p>5</p>
        </Box>
    </Flex>
  )
}

export default CartWidget