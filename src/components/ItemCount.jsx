import React from 'react';
import { useContext, useState } from 'react';
import { CartContext } from '../context/CartProvider';
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ItemCount = ({ initial, precio, stock, id, description, nombre, image }) => {
  const [cart, setCart] = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  // Boton de aumentar cantidades.

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  // Boton de disminuir cantidades.

  const decrement = () => {
    if (quantity > initial) {
      setQuantity(quantity - 1);
    }
  };

  // Maneja la lógica para agregar elementos al carrito. 
  // Verifica si la cantidad es válida, actualiza la cantidad si el elemento ya está en el carrito y agrega el elemento si no existe en el carrito. También se asegura de que la cantidad en el carrito no supere el stock disponible.
   
  const addToCart = async () => {
    if (quantity <= stock && !addedToCart) { 
      setCart((currItems) => {
        const isItemFound = currItems.find((item) => item.id === id);
        if (isItemFound) {
          return currItems.map((item) => {
            if (item.id === id) {
              const newQuantity = item.quantity + quantity;
              return { ...item, quantity: Math.min(newQuantity, stock) };
            } else {
              return item;
            }
          });
        } else {
          // Mostrar notificación antes del return
          toast.success(`${nombre} added to cart`, {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });
          const newQuantity = Math.min(quantity, stock);
          return [...currItems, { id, quantity: newQuantity, description, nombre, precio, image, stock }];
        }

      });
      setAddedToCart(true);

    }
  };

  return (
    <div>
      <div className="buttons-cart">
        <p>Available stock: </p>
        <h4 className="text-center">{stock}</h4>
      </div>
      <div className='buttons-cart'>
        <button className='btnQty' variant="outline-secondary" onClick={decrement}>
          -
        </button>
        <button className="btnAdd" onClick={addToCart} disabled={addedToCart}>
          {addedToCart ? 'Added to cart' : `Add to cart ${quantity}`}
        </button>
        <button className='btnQty' variant="outline-secondary" onClick={increment}>
          +
        </button>
      </div>
      <Link to={"/cart"}>
        <button className='btnCart' variant="outline-primary ">
          <h3>View Cart</h3>
        </button>
      </Link>
    </div>
  );
};

export default ItemCount;