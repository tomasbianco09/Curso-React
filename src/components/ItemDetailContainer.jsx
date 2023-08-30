import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [data, setData] = useState([]);

  // Obtiene una colección de productos desde Firebase Firestore y establecer los datos de esos productos en el estado del componente. Los datos se procesan para incluir el ID del documento junto con los datos del producto.
  
  useEffect(() => {
    const db = getFirestore();
    const productosCollection = collection(db, "TEAMS");

    getDocs(productosCollection).then((querySnapshot) => {
      const ropa = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setData(ropa);
    });
  }, []);

  return <ItemDetail ropa={data} />;
};

export default ItemDetailContainer
