import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../main";

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/login");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  return (
    <>
      <main className='layoutBody'>
        <div className='layoutContainer'>
          <section className='formContainer'>
            <div className="tittleLogin">
              <h2>Sign Up</h2>
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
                  <button className='button--primary' type="submit" onClick={onSubmit}>Sign up</button>
                </div>
              </form>
      
              <p className="loginText">
                Already have an account?
              </p>
              <p >
                <NavLink to="/login">
                  <button className='button--primary button--outline'>Sign in</button>
                </NavLink>
              </p>
            </div>

          </section>
        </div>
      </main>
    </>
  );
};

export default Signup;
