import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Cart from './components/Cart'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Footer from './components/Footer'
import { CartProvider } from './context/CartProvider'
import Checkout from './components/Checkout'

const App = () => {


  return (
    <>
      <BrowserRouter>
        <CartProvider>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/category/" element={<ItemListContainer />} />
          <Route exact path="/category/:category" element={<ItemListContainer />} />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          <Route exact path="/checkout/" element={<Checkout />} />

        </Routes>
        <Footer/>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App