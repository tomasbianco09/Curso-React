import { collection, addDoc, getFirestore } from 'firebase/firestore'
import { useState, useContext } from "react"
import { CartContext } from '../context/CartProvider'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const SendOrder = () => {
    const [cart, setCart, clearCart] = useContext(CartContext)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState('');
    const [orderId, setOrderId] = useState(null)
    const db = getFirestore()

    // En esta linea 

    const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

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

    const compraFinal = cart.map(item => {
        return {
            name: item.nombre,
            price: item.precio
        };
    });

    const order = {
        buyer: { name, email },
        items: { compraFinal }
    }

    const ordersCollection = collection(db, "orden")

    return (
        <>
            <section className="tittleCart">
                <h2>CHECK OUT</h2>
            </section>
            <div className="container-lg">
                <div className="sendOrderCard">

                    <div className='sendOrderForm'>
                        <h1>Completa el siguiente formulario con tus datos para confirmar tu compra!</h1>
                        <hr />
                        <form onSubmit={handleSubmit}>
                            <h2>Informacion Personal</h2>
                            <div className="textInputWrapper">
                                <input placeholder="Nombre y Apellido" type="text" className="textInput" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <h2>Informacion de contacto</h2>
                            <div className="textInputWrapper">
                                <input placeholder="Email" type="text" className="textInput" value={email} onChange={(e) => {
                                    setEmail(e.target.value);
                                    setEmailError('');
                                }} />
                            </div>
                            <button className='btnFin' type="submit" > Enviar Informacion </button>
                        </form>
                        {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
                    </div>

                </div>
            </div>

        </>
    )
}

export default SendOrder