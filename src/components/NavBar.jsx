import React from 'react'
import { Menu, MenuButton, Button, MenuList, MenuItem, Flex, Box, Spacer, Container } from "@chakra-ui/react"
import { ChevronDownIcon} from '@chakra-ui/icons'
import CartWidget from './CartWidget'


const NavBar = () => {
  return (
    <Container maxW="150rem" bg="wheat">
      <Flex>
        <Box p="4" fontSize="1.5rem" color="black">
          Noir Store
        </Box>
        <Spacer />
        <Box p="4">
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Categorias
            </MenuButton>
            <MenuList>
              <MenuItem>Remeras</MenuItem>
              <MenuItem>Buzos</MenuItem>
              <MenuItem>Accesorios</MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Spacer />
        <Box p="4">
          <CartWidget />
        </Box>
      </Flex>
    </Container>
  )
}

export default NavBar