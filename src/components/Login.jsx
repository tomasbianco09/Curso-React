import React, { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../main"
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                navigate("/");
                toast.success(user.email + " is logged in", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                  });
            })
            .catch((error) => {
                const errorCode = setError("Email or password is incorrect")
                const errorMessage = error.message;
            });
    };

    return (
        <>
            <main className='layoutBody'>
                <div className='layoutContainer'>
                    <section className='formContainer'>
                        <div className="tittleLogin">
                            <h2>LOGIN</h2>
                        </div>
                        <div>
                            <form>
                                <div className="textInputWrapper">
                                    <input
                                        id="email-address"
                                        name="email"
                                        type="email"
                                        className="textInput"
                                        required
                                        placeholder="Email address"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <div className="textInputWrapper ">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        className="textInput"
                                        required
                                        placeholder="Password"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>

                                <div>
                                    <button className='button--primary' onClick={onLogin}>Login</button>
                                </div>
                            </form>
                            <p className="loginText">
                                {error}
                            </p>
                            <p className="loginText">
                                No account yet?
                            </p>
                            <p >
                                <NavLink to="/signup">
                                    <button className='button--primary button--outline'> Sign Up</button>
                                </NavLink>
                            </p>
                        </div>

                    </section>
                </div>
            </main>
        </>
    )
}

export default Login