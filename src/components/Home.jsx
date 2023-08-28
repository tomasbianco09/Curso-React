import React from 'react'
import astralis from '../assets/img/astralis.png'
import navi from '../assets/img/navi.png'
import g2 from '../assets/img/g2.webp'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className='home'>
        <div className="titleHome">
          <h1>WE ARE NOIR</h1>
          <p>Wear your passion, play in style: Noir, your favorite eSports store!</p>
        </div>
        <div className="wave">
          <svg className='svgSty' viewBox="0 0 400 100" preserveAspectRatio="none">
            <path className='svgSty2' d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z">
            </path>
          </svg>
        </div>
        <div className="scrol"></div>
      </div>
      <section className="tittleP">
        <h2>COLLECTIONS</h2>
      </section>
      <div className="contenedor-colecciones">
        <div className="productsImg">
          <Link to={`/category/${'ASTRALIS'}`}>
            <img width={"300px"} height={"300px"} src={astralis} alt="" />
          </Link>
        </div>
        <div className="productsImg">
          <Link to={`/category/${'NAVI'}`}>
            <img width={"350px"} height={"350px"} src={navi} alt="" />
          </Link>
        </div>
        <div className="productsImg">
          <Link to={`/category/${'G2'}`}>
            <img width={"350px"} height={"350px"} src={g2} alt="" />
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home