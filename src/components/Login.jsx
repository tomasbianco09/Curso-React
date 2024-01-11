import React, {useState} from 'react';
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../main"
import { NavLink, useNavigate } from 'react-router-dom';

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
                alert(user.email + " is logged in");
            })
            .catch((error) => {
                const errorCode = setError("Email or password is incorrect")
                const errorMessage = error.message;
            });
    };

  return (
    <>
        <main>
            <section>
                <div>
                    <p> Auth-App </p>

                    <form>
                        <div>
                            <label htmlFor="email=address">Email address</label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                required
                                placeholder="Email address"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div>
                            <label htmlFor="password">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div>
                            <button onClick={onLogin}>Login</button>
                        </div>
                    </form>
                    {error}
                    <p className="text-sm text-white text-center">
                        No account yet? <NavLink to="/signup">Sign up</NavLink>
                    </p>
                </div>
            </section>
        </main>
    </>
  )
}

export default Login