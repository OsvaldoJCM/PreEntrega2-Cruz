import React from 'react'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import Navbar from './componentes/Navbar/Navbar'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={[<ItemListContainer />]}> </Route>
          <Route path='/categoria/:idCategoria' element={<ItemListContainer />}> </Route>
          <Route path='/item/:idItem' element={<ItemDetailContainer />}> </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App