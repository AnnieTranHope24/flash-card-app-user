import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Flashcard from './components/Flashcard';
import LoginPage from './components/LoginPage';
import './App.css';

function App() {
  const [decks] = useState(null);
  const [cards] = useState([
    {question: 'What is the capital of France?', answer: 'Paris'},
    {question: 'What is 2 + 2?', answer: '4'},
    {question: 'What is the largest planet in our solar system?', answer: 'Jupiter'},
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex) => (currentIndex + 1) % cards.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((currentIndex - 1 + cards.length) % cards.length);
  }

  return(
    <Router>
      <div className="app">
        <h1>Flashcard App</h1>
        <Link to="/login">
          <button>Login Your Account</button>
        </Link>
        <Routes>
          <Route
            path='/'
            element={
              <div>
                <Flashcard card={cards[currentIndex]} />
                <div className="controls">
                  <button onClick={handlePrevious}>Previous</button>
                  <button onClick={handleNext}>Next</button>
                </div>
              </div>
            }
          />
          <Route path='/login' element={<LoginPage/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
