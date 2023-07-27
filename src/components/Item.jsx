import React from 'react'
import { } from '@chakra-ui/react'

const Item = ({nombre, description, stock}) => {
  return (
        
          
          
            <div className="card">
                <div className="product-image">
                    {/* <img src="/img/prod/AST 2223 CSGO PRO JERSEY.jpg" alt="Imagen de cama"/>
                    <img src="/img/prod/AST 2223 CSGO PRO JERSEY BACK.jpg" alt="Imagen de cama" className="hover-img"/> */}
                </div>
                <div className="product-info">
                    <h4>
                      {nombre}
                    </h4>
                    <p>{description}</p>
                    <p>{stock}</p>
                </div>
            </div>
          
  )
}

export default Item
