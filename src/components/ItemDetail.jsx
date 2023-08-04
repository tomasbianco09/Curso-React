import React from 'react';
import ItemCount from './ItemCount'
import { useParams } from 'react-router-dom';
import { } from '@chakra-ui/react'

const ItemDetail = ({ productos }) => {
    const { id } = useParams();

    const filteredProducts = productos.filter((producto) => producto.id == id)

    return (
        <div>
            {filteredProducts.map((producto) => {
                return (
                    <div key={producto.id}>
                        <div className="container-lg">
                            <div className='card'>
                                <div className='product-image'></div>
                                <div className='product-info'>
                                    <h4>{producto.nombre}</h4>
                                    <p>{producto.description}</p>
                                </div>
                                <div>
                                    <ItemCount stock={producto.stock} initial={1} />
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ItemDetail