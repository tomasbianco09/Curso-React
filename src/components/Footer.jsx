import React from 'react'
import footerImg from '../assets/img/logo.png'
import { Link } from 'react-router-dom'
import { Container } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Container maxW='1320px'>
      <div className='foOter'>
        <footer>
          <div className="footer-container">
            <Link to={"/"}>
              <img src={footerImg} alt="" width='50px' height='50px' />
            </Link>
            <span>&copy; 2023 Tomas Bianco</span>
          </div>
        </footer>
      </div>
    </Container>
  )
}

export default Footer