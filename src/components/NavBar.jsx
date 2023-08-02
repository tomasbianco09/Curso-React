import React from 'react'
import { Menu, Container, MenuButton, Button, MenuList, MenuItem, Flex, Box, Spacer } from "@chakra-ui/react"
import { ChevronDownIcon} from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'


const NavBar = () => {
  return (
    <Container maxW="150rem" bg="wheat">
      <Flex>
        <Box p="4" fontSize="1.5rem" color="black">
          <Link to={"/"}>
          Noir Store
          </Link>
        </Box>
        <Spacer />
        <Box p="4">
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Categorias
            </MenuButton>
            <MenuList>
              <MenuItem>
              <Link to={`/category/${'cat1'}`}>
              Remeras
              </Link>
              </MenuItem>
              <MenuItem>
              <Link to={`/category/${'cat2'}`}>
              Remeras
              </Link>
              </MenuItem>
              <MenuItem>
              <Link to={`/category/${'cat3'}`}>
              Accesorios
              </Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Spacer />
        <Box p="4">
          <Link to={"/cart"}>
            <CartWidget />
          </Link>
        </Box>
      </Flex>
    </Container>
  )
}

export default NavBar