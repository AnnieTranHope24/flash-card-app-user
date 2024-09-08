import React, { useState } from 'react';
import { Routes, Route} from 'react-router-dom';
import Flashcard from './components/Flashcard';
import LoginPage from './components/LoginPage';
import DemoPage from './components/DemoPage';
import './App.css';
import HomePage from './components/HomePage';

function App() {
  return(
    <Routes>
      <Route path='/' element={<DemoPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/username' element={<HomePage/>}/>
    </Routes>

  );
};

export default App;
