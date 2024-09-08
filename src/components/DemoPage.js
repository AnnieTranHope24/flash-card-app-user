import React, { useState } from 'react';
import Flashcard from './Flashcard';
import '../App.css';

import { Routes, Route, Link } from 'react-router-dom';

function DemoPage(){
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
        <div className='app'>
            <Flashcard card={cards[currentIndex]} />
            <div className="controls">
                <button onClick={handlePrevious}>Previous</button>
                <button onClick={handleNext}>Next</button>
            </div>
            <Link to="/login">
                <button>Login Your Account</button>
            </Link>
        </div>
    );
};
export default DemoPage;