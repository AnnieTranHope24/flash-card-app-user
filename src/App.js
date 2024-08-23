import React, { useState } from 'react';
import Flashcard from './components/Flashcard';
import './App.css';

function App() {
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
    <div className="app">
      <h1>Flashcard App</h1>
      <Flashcard card={cards[currentIndex]} />
      <div className="controls">
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default App;
