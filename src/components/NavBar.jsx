import React from 'react'
import { Menu, MenuButton, Button, MenuList, MenuItem, Flex, Box, Spacer } from "@chakra-ui/react"
import { ChevronDownIcon} from '@chakra-ui/icons'
import CartWidget from './CartWidget'


const NavBar = () => {
  return (
    <Flex>
        <Box p="2" bg="black" color="white" >
        Comision 47120
        </Box>
        <Spacer />
          <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                  Categories
              </MenuButton>
              <MenuList>
                  <MenuItem>Category A</MenuItem>
                  <MenuItem>Category B</MenuItem>
                  <MenuItem>Category C</MenuItem>
              </MenuList>
          </Menu>
          <Spacer />
          <Box>
          <CartWidget/>
          </Box>
    </Flex>
  )
}

export default NavBar