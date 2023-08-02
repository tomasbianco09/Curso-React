import React from 'react'
import {  } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const Item = ({nombre, description, stock}) => {
  return (
    <div className="container-lg">
        <div className='card'>
            <div className='product-image'>
                <img src="/img/prod/AST 223 CSGO PRO JERSEY.jpg" alt="Imagen de cama"/>
                <img src="/img/prod/AST 223 CSGO PRO JERSEY BACK.jpg" alt="Imagen de cama" className="hover-img"/>
            </div>
            <div className='product-info'>
                <h4>{nombre}</h4>
                <p>{description}</p>
            </div>
            <div className='btn-p'>
                <Link to={`/item/${'id'}`}>
                    <button>
                        Detalles
                    </button>
                </Link>
            </div>
        </div>
    </div>
    
  )
}

export default Item
