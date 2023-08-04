import React from 'react';
import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
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

  return (
    <div>
      <div className="buttons-cart">
        <p>Cantidad: </p>
        <button variant="outline-secondary " size="sm" onClick={decrement}>
          -
        </button>
        <button variant="outline-secondary " size="sm" onClick={increment}>
          +
        </button>
        <h4 className="text-center">{quantity}</h4>
      </div>

      <div className='buttons-add-cart'>
        <button variant='success' onClick={() => onAdd(quantity)} disabled={!stock}>
          Agregar al carrito
        </button>
        <button variant="outline-primary ">Comprar ahora</button>
      </div>

    </div>
  );
};

export default ItemCount;