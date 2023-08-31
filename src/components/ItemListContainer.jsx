import React from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs, query, orderBy } from 'firebase/firestore';

import Loading from './Loading'

const ItemListContainer = () => {
  const { category } = useParams()
  const [loading, setLoading] = useState(true)
  const [elementos, setElementos] = useState([])
  const [products, setProducts] = useState([])

  // Obtener una colección de productos desde Firebase Firestore, ordenarlos alfabéticamente por el nombre y establecer los datos de esos productos en el estado del componente. Los datos se procesan para incluir el ID del documento junto con los datos del producto.

  useEffect(() => {
    const db = getFirestore();

    const ropaCollection = collection(db, "TEAMS");
    const orderedQuery  = query(ropaCollection, orderBy("nombre"));
    getDocs(orderedQuery ).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setProducts(docs);
  });
  }, [])

  // Filtramos cada producto por categoria.

  const filteredProducts = products.filter((producto) => producto.category === category)

  // Aqui cargamos el Loader que se renderiza cuando queremos ver los productos.

  useEffect(() => {
    setTimeout(() => {
      setElementos(filteredProducts)
      setLoading(false)
    }, 3000)

  }, [])

  if (loading) {
    return <Loading/>
  }

  return (
    <>
      <section className="tittleColections">
        <h2>{category ? category : 'ALL PRODUCTS'}</h2>
      </section>
      <div className="container-lg">

        {category ? <ItemList productos={filteredProducts} /> : <ItemList productos={products} />}
      </div>
    </>
  )
}

export default ItemListContainer