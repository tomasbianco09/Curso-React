import React from 'react'
import { Card } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ({ nombre, description, id, image, precio }) => {
    return (
        <>
            <Card margin='5px'>
                <div className='card'>
                    <div className='product-image'>
                        <img src={image} alt="" />
                    </div>
                    <div className='product-info'>
                        <h4>{nombre}</h4>
                        <p>$ {precio}</p>
                    </div>
                    <Link to={`/item/${id}`}>
                        <button className='btn-p'>
                            <h2>Details</h2>
                        </button>
                    </Link>
                </div>
            </Card>
        </>
    )
}

export default Item