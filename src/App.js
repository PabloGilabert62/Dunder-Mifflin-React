import './App.css';
// eslint-disable-next-line
import React, { Component }  from 'react';
import Navbar from './components/Navbar/Navbar';
import Greeting from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">

      <Navbar/>
      <Greeting/>

    </div>
  );
}

export default App;
