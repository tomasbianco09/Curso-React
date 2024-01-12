import React from 'react'
import { Flex, Box, Spacer, Img } from "@chakra-ui/react"
import { useState } from 'react'
import { SmallCloseIcon } from '@chakra-ui/icons'
import { Link, NavLink } from 'react-router-dom'
import CartWidget from './CartWidget'
import brand from '../assets/img/logo.png'
import LoginWidget from './LoginWidget'

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
                <span>HOME</span>
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
                <span>CART</span>
              </NavLink>
            </li>
            <li className="textMenu">
              <NavLink to={"/contact/"} onClick={closeMenu}>
                <span>CONTACT</span>
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
        <Box p="4" marginTop="1rem" display="flex">
          <LoginWidget />
          <CartWidget />
        </Box>
      </Flex>
    </div>
  )
}

export default NavBar