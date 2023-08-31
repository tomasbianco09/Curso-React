import React from 'react';
import ItemCount from './ItemCount'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { doc, getFirestore, getDoc } from "firebase/firestore";

const ItemDetail = ({ ropa }) => {
    const { id } = useParams();
    const [producto, setProducto] = useState([]);

    useEffect(() => {
        const db = getFirestore();

        const productRef = doc(db, "TEAMS", `${id}`);

        getDoc(productRef).then((snapshot) => {
            if (snapshot.exists()) {
                setProducto(snapshot.data());
            } else {
                console.log("No such document");
            }
        });
    }, []);

    const filteredProducts = ropa.filter((producto) => producto.id == id)

    return (
        <div>
            {filteredProducts.map((producto) => {
                return (
                    <div key={producto.id}>
                        <div className="container-detail">
                            <div className='cardDetailImg'>
                                <img src={producto.image} alt="Producto 1" />
                            </div>
                            <div className='cardDetailPrice'>
                                <div className='product-info'>
                                    <h4>{producto.nombre}</h4>
                                    <p>${producto.precio}</p>
                                </div>
                                <div>
                                    <ItemCount image={producto.image} precio={producto.precio} description={producto.description} nombre={producto.nombre} id={producto.id} stock={producto.stock} initial={1} />
                                </div>
                                <hr />
                                <div className='product-details'>
                                    <h4>PRODUCT DETAILS</h4>
                                    <p>{producto.description}</p>
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