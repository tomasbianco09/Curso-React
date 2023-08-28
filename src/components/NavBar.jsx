import React from 'react'
import { Flex, Box, Spacer } from "@chakra-ui/react"
import { useState } from 'react'
import { SmallCloseIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'
import brand from '../assets/img/logo.png'

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
              <Link to={"/"} onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="textMenulist ">
              <Link to={`/category/${''}`} onClick={closeMenu}>
                <SmallCloseIcon marginLeft={"5px"} /> All Products
              </Link>
            </li>
            <li className="textMenulist">
              <Link to={`/category/${'ASTRALIS'}`} onClick={closeMenu}>
                <SmallCloseIcon marginLeft={"5px"} /> ASTRALIS
              </Link>
            </li>
            <li className="textMenulist">
              <Link to={`/category/${'NAVI'}`} onClick={closeMenu}>
                <SmallCloseIcon marginLeft={"5px"} /> NAVI
              </Link>
            </li>
            <li className="textMenulist">
              <Link to={`/category/${'G2'}`} onClick={closeMenu}>
                <SmallCloseIcon marginLeft={"5px"} /> G2
              </Link>
            </li>
            <hr className="" />
            <li className="textMenu">
              <Link to={"/cart"} onClick={closeMenu}>
                Carrito
              </Link>
            </li>
            <li className=""><a href="#" className="text-decoration-none px-3 py-2 d-block"><i className="bi bi-newspaper px-2"></i>Novedades</a></li>
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