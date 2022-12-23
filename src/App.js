import './App.css';
import React from 'react';
import Start from './components/Start/Start';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Navbar from './components/Navbar/Navbar';
import ItemContainer from './components/ItemContainer/ItemContainer'
import Favorites from './components/Favorites/Favorites';
import Cart from './components/Cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FavoritesProvider } from './context/FavoritesContext';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <FavoritesProvider>
          <BrowserRouter>
            <Navbar/>
            <Routes>
            <Route path='/' element={<Start/>}/>
              <Route path='/all' element={<ItemContainer/>}/>
              <Route path='/category/:categoryId' element={<ItemContainer/>}/>
              <Route path='/prods/:prodsId' element={<ItemDetailContainer/> } />
              <Route path='/cart' element={<Cart/>} />
            </Routes>
          </BrowserRouter>
        </FavoritesProvider>
      </CartProvider>
    </div>
  );
}

export default App;
