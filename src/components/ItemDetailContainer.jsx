import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [data, setData] = useState([]);
  
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
