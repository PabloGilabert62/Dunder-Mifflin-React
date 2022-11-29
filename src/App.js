import './App.css';
// eslint-disable-next-line
import React, { Component }  from 'react';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Counter from './components/Counter/Counter';

function App() {

  const handleOnAdd = (quantity) => {
    alert(quantity + " items added to cart");
  }

  return (
    <div className="App">

      <Navbar/>
      <ItemListContainer text={"Welcome to Dunder Mufflin!"}/>
      <ItemListContainer text={"See our products below!"}/>

      <Counter onAdd={handleOnAdd} stock={5}/>

      <ItemListContainer text={"Stock available: 5"}/>

    </div>
  );
}

export default App;
