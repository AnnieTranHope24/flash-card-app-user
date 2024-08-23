import React, { useState } from 'react';
import './Flashcard.css';

const Flashcard = ({ card }) => {
    const [flipped, setFlipped] = useState(false);

    const handleFlip = () => {
        setFlipped(!flipped);
    };

    return (
        <div className={`flashcard ${flipped ? 'flipped' : ''}`} onClick={handleFlip}>
            <div className="front">
                <h2>{card.question}</h2>
            </div>
            <div className="back">
                <h2>{card.answer}</h2>
            </div>
        </div>
    );
};

export default Flashcard;