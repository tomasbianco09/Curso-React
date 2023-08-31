import React, { useContext } from 'react'
import { CartContext } from '../context/CartProvider'
import { Link } from 'react-router-dom';
import { Button, ButtonGroup, IconButton } from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import Swal from 'sweetalert2';

const Cart = () => {
  const [cart, setCart, totalCompra, impuesto, totalConImpuesto] = useContext(CartContext);

  // Controlamos que cuando el cart este vacio nos muestre una pagina donde nos deje seguir comprando.

  if (cart.length === 0) {
    return (
      <div className='no-items'>
        <h1>Your cart seems empty!</h1>

        <Link to='/' className='Option'>
          <button>
            <span>Continue shopping</span>
          </button>
        </Link>
      </div>
    )
  }

  // Boton de aumentar cantidades

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

  // Boton de disminuir cantidades

  const decreaseQuantity = (item) => {
    const updatedCart = cart.map((cartItem) =>
      cartItem.id === item.id && cartItem.quantity > 1
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
    setCart(updatedCart);
  };

  // Boton para eliminar item completo

  const removeItem = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
  };

  // Boton para vaciar el carrito

  const clearCart = () => {
    Swal.fire({
      title: 'Clear',
      text: 'Are you sure you want to clear your cart?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, clear it!',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        setCart([]);
        Swal.fire('Cart Cleared', 'Your cart has been cleared.', 'success');
      }
    });
  };

  return (
    <>
      <section className="tittleCart">
        <h2>YOUR CART</h2>
      </section>
      <div className="container-lg">
        <div className="cart-view">
          <div className="cart">
            <div className='cart-shopping'>
              <Link to='/'>
                <button>Continue shopping</button>
              </Link>
            </div>
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
            <button className="checkout-btn" onClick={(clearCart)}>
              <span className="button_lg">
                <span className="button_slv"></span>
                <span className="button_text">Clear cart</span>
              </span>
            </button>
          </div>
          <div className="cart-total">
            <div className="valores-total">
              <p>Subtotal: ${totalCompra}</p>
              <p>Tax (21%)</p>
              <p>Total: ${totalConImpuesto.toFixed(2)}</p>
            </div>
            <Link to={`/checkout`}>
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