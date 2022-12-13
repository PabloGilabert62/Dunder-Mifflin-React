import React from 'react';
import './App.css';
import Start from './components/Start/Start';
import GetProds from './components/GetProds/GetProds';
import GetDetailProds from './components/GetDetailProds/GetDetailProds'
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Staff from './components/Staff/Staff';
import Location from './components/Location/Location';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createContext } from 'react';
import { useState } from 'react';

export const CartContext = createContext()

function App() {

  const [items, setItems] = useState([])

  return (
    <div className="App">
      <CartContext.Provider value={{items, setItems}}>
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
        </Routes>
      </BrowserRouter>
      </CartContext.Provider>
    </div>
  );
}

export default App;
