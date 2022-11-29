import './App.css';
// eslint-disable-next-line
import React, { Component }  from 'react';
import Navbar from './components/Navbar/Navbar';
<<<<<<< HEAD
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Counter from './components/Counter/Counter';
=======
import Greeting from './components/ItemListContainer/ItemListContainer';
>>>>>>> 4d8ec59abd9dcbf19e1a950fc29e02a7684fffed

function App() {

  const handleOnAdd = (quantity) => {
    alert(quantity + " items added to cart");
  }

  return (
    <div className="App">

      <Navbar/>
<<<<<<< HEAD
      <ItemListContainer text={"Welcome to Dunder Mufflin!"}/>
      <ItemListContainer text={"See our products below!"}/>

      <Counter onAdd={handleOnAdd} stock={5}/>

      <ItemListContainer text={"Stock available: 5"}/>
=======
      <Greeting/>
>>>>>>> 4d8ec59abd9dcbf19e1a950fc29e02a7684fffed

    </div>
  );
}

export default App;
