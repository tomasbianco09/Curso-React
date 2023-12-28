import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ nombre, description, id, image, precio }) => {
    return (
        <>
            <div className='card'>
            <Link to={`/item/${id}`}>
                <div className='product-image'>
                    <img src={image} alt="" />
                </div>
                <div className='product-info'>
                    <h4>{nombre}</h4>
                    <p>$ {precio}</p>
                </div>
                
                <button className='btn-p'>
                    <h2>Details</h2>
                </button>
            </Link>
            </div>
        </>
    )
}

export default Item