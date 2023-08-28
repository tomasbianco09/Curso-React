import React from 'react';
import { useContext } from 'react';
import { useState } from "react";
import { CartContext } from '../context/CartProvider';
import { Link } from 'react-router-dom'

const ItemCount = ({ initial, precio, stock, id, description, nombre, image }) => {
  const [cart, setCart,] = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > initial) {
      setQuantity(quantity - 1);
    }
  };
  
  const addToCart = async () => {
    if (quantity <= stock) { // Verificar si la cantidad es menor o igual al stock
      setCart((currItems) => {
        const isItemFound = currItems.find((item) => item.id === id);
        if (isItemFound) {
          return currItems.map((item) => {
            if (item.id === id) {
              const newQuantity = item.quantity + quantity;
              return { ...item, quantity: Math.min(newQuantity, stock) }; // Asegurarse de que la cantidad no supere el stock
            } else {
              return item;
            }
          });
        } else {
          const newQuantity = Math.min(quantity, stock); // Asegurarse de que la cantidad no supere el stock
          return [...currItems, { id, quantity: newQuantity, description, nombre, precio, image, stock }];
        }
      });
    }
  };

  return (
    <div>
      <div className="buttons-cart">
        <p>Stock disponible: </p>
        <h4 className="text-center">{stock}</h4>
      </div>
      <div className='buttons-cart'>
        <button variant="outline-secondary " size="sm" onClick={decrement}>
          -
        </button>
        <button className="bg-success mb-3 me-3 "size="sm" onClick={() => { addToCart() }}> 
          Agregar {quantity}
        </button>
        <button variant="outline-secondary " size="sm" onClick={increment}>
          +
        </button>
      </div>
      <Link to={"/cart"}>
        <button className='btnCart' variant="outline-primary ">
          <h3>Ver Carrito</h3>
        </button>
      </Link>
    </div>
  );
};

export default ItemCount;