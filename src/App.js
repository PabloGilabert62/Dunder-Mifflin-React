import React from 'react';
import './App.css';
import Text from './components/Texts/Texts';
import GetProds from './components/GetProds/GetProds';
import GetDetailProds from './components/GetDetailProds/GetDetailProds'
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Staff from './components/Staff/Staff';
import Location from './components/Location/Location';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <BrowserRouter>

        <Navbar/>

        <Text text={'Welcome to Dunder Mufflin!'}/>

        <Routes>

          <Route path='/home' element={<Home/>}/>

          <Route path='/prods' element={<GetProds/>}/>
          <Route path='/prods/:alt' element={<GetDetailProds/>}/>
          
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/staff' element={<Staff/>}/>
          <Route path='/location' element={<Location/>}/>

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
