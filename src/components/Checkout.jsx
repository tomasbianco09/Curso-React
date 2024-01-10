import { collection, addDoc, getFirestore } from 'firebase/firestore'
import { useState, useContext, useEffect } from "react"
import { CartContext } from '../context/CartProvider'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const Checkout = () => {
    const [cart, setCart, totalCompra, impuesto, totalConImpuesto] = useContext(CartContext)
    const [name, setName] = useState("")
    const [last, setLast] = useState("")
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState('');
    const [orderId, setOrderId] = useState(null)
    const db = getFirestore()

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    const formattedTime = currentDate.toLocaleTimeString();
    

    const clearCart = () => {
        setCart([]);
    }

    useEffect(() => {
        // Scroll al principio de la página cuando se monta o actualiza el componente
        window.scrollTo(0, 0);
      }, []);

    // En esta linea validamos el email para que se coloque de forma correcta.

    const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    // Se encarga de manejar la logica despues de que un usuario haya enviado un formulario. 
    // Realiza validaciones de correo electrónico, agrega un nuevo pedido a una colección de pedidos en una base de datos, actualiza el estado de la aplicación, limpia los campos del formulario y muestra una notificacion visual al usuario con su numero de orden.

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!validateEmail(email)) {
            setEmailError('Por favor, ingresa una dirección de correo electrónico válida.');
            return;
        }

        addDoc(ordersCollection, order).then(({ id }) => {
            setOrderId(id);
            setEmail("");
            setName("");
            clearCart();
            Swal.fire({
                icon: 'success',
                title: 'Compra finalizada',
                text: `Gracias por tu compra! Número de orden: ${id}`,
                confirmButtonText: 'Gracias',
            });
        });
    }

    // Aqui se renderiza un mensaje de agradecimiento por la compra y un botón para regresar al menú principal en caso de que el carrito de compras esté vacío. 

    if (cart.length === 0) {
        return (
            <div className='no-items'>
                <h1>Muchas gracias por tu compra!</h1>

                <Link to='/' className='Option'>
                    <button>
                        Regresar al menu
                    </button>
                </Link>
            </div>
        )
    }

    //  Aqui se preparan los datos de la compra, para registrar la compra en una base de datos.

    const compraFinal = cart.map(item => {
        return {
            name: item.nombre,
            price: item.precio,
            cantidad: item.quantity
        };
    });

    // Aqui se prepara la orden que va a ser enviada a la base  de datos con documentacion del cliente y sus productos.

    const order = {
        buyer: { name, last, email },
        items: { compraFinal },
        buydate: { formattedDate, formattedTime }

    }

    const ordersCollection = collection(db, "orden")

    return (
        <>
            <section className="tittleCheckout">
                <h2>CHECK OUT</h2>
            </section>
            <div className="container-lg">
                <form onSubmit={handleSubmit}>
                    <div className="checkout-view">
                        <div className="checkout-card">
                            <h2>PERSONAL INFORMATION</h2>
                            <div className='personal-inf'>
                                <div className="textInputWrapper">
                                    <input placeholder="First" id="nombre" type="text" className="textInput" value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className="textInputWrapper">
                                    <input placeholder="Last" id="apellido" type="text" className="textInput" value={last} onChange={(e) => setLast(e.target.value)} />
                                </div>
                            </div>

                            <h2>CONTACT INFORMATION</h2>
                            <div className='personal-inf'>
                                <div className="textInputWrapper">
                                    <input placeholder="Email" id="email" type="email" className="textInput" value={email} onChange={(e) => {
                                        setEmail(e.target.value);
                                        setEmailError('');
                                    }} />
                                </div>
                            </div>
                            {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
                            <div className="checkout-products">
                                {cart.map((item) => {
                                    return (
                                        <ul className="checkout-items" key={item.id}>
                                            <li className="checkout-item">
                                                <img src={item.image} alt="Producto" />
                                                <div className="checkout-item-details">
                                                    <h4>{item.nombre}</h4>
                                                    <p>Price: ${item.precio}</p>
                                                    <p>Quantity: {item.quantity}</p>
                                                </div>

                                            </li>
                                            <hr />
                                        </ul>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="cart-total">
                            <div className="valores-total">
                                <p>Subtotal: ${totalCompra}</p>
                                <p>Tax (21%)</p>
                                <p>Total: ${totalConImpuesto.toFixed(2)}</p>
                            </div>
                            <button className="checkout-btn" type="submit">
                                <span className="button_lg">
                                    <span className="button_sl"></span>
                                    <span className="button_text">Checkout</span>
                                </span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>

        </>
    )
}

export default Checkout