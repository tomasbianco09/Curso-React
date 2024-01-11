import React from 'react'
import { Box, Flex, Spacer } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const LoginWidget = () => {
  return (
    <Flex>
        <Link to={'/login'}>
          <Box>
            <i class='bx bxs-user bx-sm'></i>
          </Box>
        </Link>
    </Flex>
  )
}

export default LoginWidget