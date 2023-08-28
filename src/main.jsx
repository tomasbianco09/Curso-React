import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUj4onFU94otX55VpsXPrvfAxKNeugrI0",
  authDomain: "noir-store.firebaseapp.com",
  projectId: "noir-store",
  storageBucket: "noir-store.appspot.com",
  messagingSenderId: "443280031592",
  appId: "1:443280031592:web:e878ea820f43a14271a0dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
    <ChakraProvider>
        <App />
    </ChakraProvider>
)
