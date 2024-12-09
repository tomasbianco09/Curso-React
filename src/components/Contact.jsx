import React from 'react'
import { collection, addDoc, getFirestore } from 'firebase/firestore'
import { useState } from "react"
import Swal from 'sweetalert2'

const Contact = () => {
    const [name, setName] = useState("")
    const [last, setLast] = useState("")
    const [email, setEmail] = useState("")
    const [ask, setAsk] = useState("")
    const [emailError, setEmailError] = useState("");
    const [consuId, setConsuId] = useState(null)
    const db = getFirestore()

    // En esta linea validamos el email para que se coloque de forma correcta.

    const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    // Se encarga de manejar la logica despues de que un usuario haya enviado un formulario. 
    // Realiza validaciones de correo electrónico, agrega una nueva consulta a una colección de consultas en una base de datos, actualiza el estado de la aplicación, limpia los campos del formulario y muestra una notificacion visual al usuario con su numero de consulta.

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!validateEmail(email)) {
            setEmailError('Please enter a valid email address.');
            return;
        }

        addDoc(consulCollection, consul).then(({ id }) => {
            setConsuId(id);
            setEmail("");
            setName("");
            setLast("");
            setAsk("");
            Swal.fire({
                icon: 'success',
                title: 'Query submitted.',
                text: `We will contact you shortly. Contact ticket number: ${id}`,
                confirmButtonText: 'Thanks you',
            });
        });
    }

    // Aqui se prepara la orden que va a ser enviada a la base  de datos con documentacion del cliente y su consulta puntual.

    const consul = {
        client: { name, last, email, ask },
    }

    const consulCollection = collection(db, "contact")

    return (
        <div>
            <div className="contactTexts">
                <h1>contact us</h1>
                <p>Fill out the following form to provide us with information and we will contact you in minutes!</p>
            </div>
            <section className="contactoPage">
                <div className="formulario">
                    <form className="formContact" onSubmit={handleSubmit}>
                        <h2>Contact form</h2>
                        <input className="cajas" id="nombre" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                        <input className="cajas" id="apellido" type="text" placeholder="Last" value={last} onChange={(e) => setLast(e.target.value)} />
                        <input className="cajas" id="email" type="email" placeholder="Email" value={email} onChange={(e) => {
                            setEmail(e.target.value);
                            setEmailError('');
                        }} />
                        {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
                        <textarea className="casilla" id="subject" name="subject" placeholder="Tell us" value={ask} onChange={(e) => setAsk(e.target.value)} />
                        <button className="boton" type="submit"> SEND </button>
                        <button className="boton" type="reset"> RESET </button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Contact