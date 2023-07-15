import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

const App = () => {
  return (
    <>
      <NavBar/>
      <ItemListContainer
      greeting="Bienvenidos a mi tienda"
      />
    </>
  )
}

export default App