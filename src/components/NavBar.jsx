import React from 'react'
import { Flex, Box, Spacer } from "@chakra-ui/react"
import { useState } from 'react'
import { SmallCloseIcon, ChatIcon, StarIcon } from '@chakra-ui/icons'
import { Link, NavLink  } from 'react-router-dom'
import CartWidget from './CartWidget'
import astralis from '../assets/img/astralis.png'
import navi from '../assets/img/navi.png'
import g2 from '../assets/img/g2.webp'
import brand from '../assets/img/logo.png'

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Esta función cambia el estado del menú entre abierto y cerrado.

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Esta función se utiliza para forzar el cierre del menú, independientemente de si está abierto o cerrado actualmente.

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div maxw="100%" bg="white" className='nav navbar'>
      <Flex>
        <div className={`hamburger-menu ${menuOpen ? 'open' : ''}`}>
          <input id="menu__toggle" type="checkbox" checked={menuOpen} onChange={toggleMenu} />
          <label className="menu__btn" htmlFor="menu__toggle">
            <span></span>
          </label>
          <ul className="menu__box">
            <li className="textMenu">
              <NavLink to={"/"} onClick={closeMenu}>
                <StarIcon  w={4} h={4} marginLeft={"10px"} marginBottom={"4px"} /> HOME
              </NavLink >
            </li>
            <li className="textMenulist ">
              <NavLink to={`/category/${''}`} onClick={closeMenu}>
                <SmallCloseIcon marginLeft={"5px"} /> All Products
              </NavLink>
            </li>
            <li className="textMenulist">
              <NavLink to={`/category/${'ASTRALIS'}`} onClick={closeMenu}>
                <SmallCloseIcon marginLeft={"5px"} /> ASTRALIS
              </NavLink>
            </li>
            <li className="textMenulist">
              <NavLink to={`/category/${'NAVI'}`} onClick={closeMenu}>
                <SmallCloseIcon marginLeft={"5px"} /> NAVI
              </NavLink>
            </li>
            <li className="textMenulist">
              <NavLink to={`/category/${'G2'}`} onClick={closeMenu}>
                <SmallCloseIcon marginLeft={"5px"} /> G2
              </NavLink>
            </li>
            <hr className="" />
            <li className="textMenu">
              <NavLink to={"/cart"} onClick={closeMenu}>
                CART
              </NavLink>
            </li>
            <li className="textMenu">
              <NavLink to={"/contact/"} onClick={closeMenu}>
              <ChatIcon w={4} h={4} marginLeft={"10px"} marginBottom={"4px"} /> CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
        <Spacer />
        <div className='navLogo'>
          <Link to={"/"}>
            <img src={brand} alt="" width='50px' height='50px' />
          </Link>
        </div>
        <Spacer />
        <Box p="4" marginTop="1rem">
          <CartWidget />
        </Box>
      </Flex>
    </div>
  )
}

export default NavBar