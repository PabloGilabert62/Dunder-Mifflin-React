import './App.css';
import React from 'react';
import Start from './components/Start/Start';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Navbar from './components/Navbar/Navbar';
import Favorites from './components/Favorites/Favorites';
import Cart from './components/Cart/Cart';
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import Location from './components/Location/Location'
import Staff from './components/Staff/Staff'
import Checkout from './components/Checkout/Checkout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FavoritesProvider } from './context/FavoritesContext';
import { CartProvider } from './context/CartContext';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetail from './components/ItemDetail/ItemDetail';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <FavoritesProvider>
          <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route path='/prods' element={<ItemDetail/>}></Route>
              <Route path='/all' element={<ItemDetail/>}></Route>
              <Route path='/category/:categoryId' element={<ItemDetail/>}/>
              <Route path='/prods/:prodsId' element={<ItemDetailContainer/> }/>

              {/* --- */}

              <Route path='/' element={<Start/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/favorites' element={<Favorites/>}/>
              <Route path='/home' element={<Home/>}/>
              <Route path='/staff' element={<Staff/>}/>
              <Route path='/location' element={<Location/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/checkout' element={<Checkout/>}/>
            </Routes>
          </BrowserRouter>
        </FavoritesProvider>
      </CartProvider>
    </div>
  );
}

export default App;
