import React, { useContext } from 'react'
import { CartContext } from '../context/CartProvider'
import { Link } from 'react-router-dom';
import { Button, ButtonGroup, IconButton } from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons'

const Cart = () => {
  const [cart, setCart, clearCart, totalCompra, impuesto, totalConImpuesto] = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className='no-items'>
        <h1>Your cart seems empty</h1>

        <Link to='/' className='Option'>
          <button>
            Continue shopping
          </button>
        </Link>
      </div>
    )
  }

  const increaseQuantity = (item) => {
    const updatedCart = cart.map((cartItem) =>
      cartItem.id === item.id
        ? {
            ...cartItem,
            quantity:
              cartItem.quantity + 1 <= cartItem.stock
                ? cartItem.quantity + 1
                : cartItem.quantity,
          }
        : cartItem
    );
    setCart(updatedCart);
  };

  const decreaseQuantity = (item) => {
    const updatedCart = cart.map((cartItem) =>
      cartItem.id === item.id && cartItem.quantity > 1
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
    setCart(updatedCart);
  };

  const removeItem = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
  };

  return (
    <>
      <section className="tittleCart">
        <h2>YOUR CART</h2>
      </section>
      <div className="container-lg">
        <div className="cart-view">
          <div className="cart">
            {cart.map((item) => {
              return (
                <ul className="cart-items" key={item.id}>
                  <li className="item">
                    <img src={item.image} alt="Producto" />
                    <div className="item-details">
                      <h4>{item.nombre}</h4>
                      <p>Price: ${item.precio}</p>
                      <p>Quantity: {item.quantity}</p>
                    </div>
                    <ButtonGroup className='botones-cart' size='sm' isAttached variant='outline'>
                      <IconButton aria-label='Add to friends' onClick={() => decreaseQuantity(item)} icon={<MinusIcon />} />
                      <Button onClick={() => removeItem(item.id)}>Delete</Button>
                      <IconButton aria-label='Add to friends' onClick={() => increaseQuantity(item)} icon={<AddIcon />} />
                    </ButtonGroup>
                  </li>
                  <hr />
                </ul>
              )
            })}
            <button className="checkout-btn">
              <span className="button_lg">
                <span className="button_slv"></span>
                <span className="button_text" onClick={(clearCart)}>Clear cart</span>
              </span>
            </button>
          </div>
          <div className="cart-total">
            <div className="valores-total">
              <p>Subtotal: ${totalCompra}</p>
              <p>Tax (21%)</p>
              <p>Total: ${totalConImpuesto.toFixed(2)}</p>
            </div>
            <Link to={`/sendorder`}>
              <button className="checkout-btn">
                <span className="button_lg">
                  <span className="button_sl"></span>
                  <span className="button_text">Checkout</span>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>    
    </>
  );
};

export default Cart