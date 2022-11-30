import './App.css';
// eslint-disable-next-line
import React, { Component, useEffect }  from 'react';

import Navbar from './components/Navbar/Navbar';
import Texts from './components/Texts/Texts';
import ItemContainer from './components/ItemContainer/ItemContainer';
import Products from './components/Products/Products';

/* -- COMPONENTE -- */
function App() {

  return (
    <div className="App">
      
      <Navbar/>

      <Texts text={"Welcome to Dunder Mufflin!"}/>
      <Texts text={"See our products below!"}/>

      <ItemContainer/>

      <Products/>
    </div>
  );
}

export default App;
