import './App.css';
import React from 'react';
import Start from './components/Start/Start';
import Home from './components/Home/Home';
import GetProds from './components/GetProds/GetProds';
import GetDetailProds from './components/GetDetailProds/GetDetailProds'
import Contact from './components/Contact/Contact';
import Staff from './components/Staff/Staff';
import Location from './components/Location/Location';
import Navbar from './components/Navbar/Navbar';
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
              <Route path='/' element={<Start/>}></Route>
              <Route path='/home' element={<Home/>}/>
              <Route path='/prods' element={<GetProds/>}/>
              <Route path='/prods/:alt' element={<GetDetailProds/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/staff' element={<Staff/>}/>
              <Route path='/location' element={<Location/>}/>
              <Route path='/favorites' element={<Favorites/>}/>
              <Route path='/cart' element={<Cart/>}/>
            </Routes>
          </BrowserRouter>
        </FavoritesProvider>
      </CartProvider>
    </div>
  );
}

export default App;
