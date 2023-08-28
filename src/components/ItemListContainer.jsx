import React from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs, query, orderBy } from 'firebase/firestore';

import Loading from './Loading'

const ItemListContainer = () => {
  const { category } = useParams()
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const ropaCollection = collection(db, "TEAMS");
    const orderedQuery  = query(ropaCollection, orderBy("nombre"));
    getDocs(orderedQuery ).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setProducts(docs);
  });
  }, [])

  const filteredProducts = products.filter((producto) => producto.category === category)

  // const [loading, setLoading] = useState(true)
  // const [elementos, setElementos] = useState([])

  // useEffect(() => {
  //   setTimeout(() => {
  //     setElementos(filteredProducts)
  //     setLoading(false)
  //   }, 5000)

  // }, [])

  // if (loading) {
  //   return <Loading/>
  // }

  return (
    <>
      <section className="tittleColections">
        <h2>{category}</h2>
      </section>
      <div className="container-lg">

        {category ? <ItemList productos={filteredProducts} /> : <ItemList productos={products} />}
      </div>
    </>
  )
}

export default ItemListContainer