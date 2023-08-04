import React from 'react'
import { } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { Button, Card, CardBody, CardFooter, CardHeader, Heading, Text } from '@chakra-ui/react'

const Item = ({ nombre, description, id, }) => {
    return (
        <div className="container-lg">
            <div className='card'>
                <div className='product-image'></div>
                <div className='product-info'>
                    <h4>{nombre}</h4>
                    <p>{description}</p>
                </div>
                <div className='btn-p'>
                    <button>
                        <Link to={`/item/${id}`}>
                            Detalles
                        </Link>
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Item
