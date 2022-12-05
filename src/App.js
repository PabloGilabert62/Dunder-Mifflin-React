import React from 'react';
import './App.css';
import Text from './components/Texts/Texts';
import NotesContainer from './components/NotesContainer/NotesContainer';
import NoteDetailContainer from './components/NoteDetailContainer/NoteDetailContainer';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">

      <BrowserRouter>

        <Navbar/>

        <Text text={'Welcome to Dunder Mufflin!'}/>
        <Text text={'See our products below'}/>

        <Routes>

          <Route path='/' element={<NotesContainer/>}/>
          <Route path='/prods/:alt' element={<NoteDetailContainer/>}/>

        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
