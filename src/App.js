import React, { useState } from 'react';
import { Routes, Route} from 'react-router-dom';
import Flashcard from './components/Flashcard';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import './App.css';

function App() {
  return(
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
    </Routes>

  );
};

export default App;
