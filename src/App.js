import './App.css';
// eslint-disable-next-line
import React, { Component, useEffect }  from 'react';
import { useState } from 'react';

import Navbar from './components/Navbar/Navbar';
import Texts from './components/Texts/Texts';
import ItemContainer from './components/ItemContainer/ItemContainer';

/* -- COMPONENTE -- */
function App() {

  return (
    <div className="App">
      
      <Navbar/>

      <Texts text={"Welcome to Dunder Mufflin!"}/>
      <Texts text={"See our products below!"}/>

      <ItemContainer/>

    </div>
  );
}

export default App;
