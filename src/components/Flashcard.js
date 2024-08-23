import React, { useEffect, useState } from 'react';
import './Flashcard.css';

const Flashcard = ({ card }) => {
    const [flipped, setFlipped] = useState(false);
    const [currentCard, setCurrentCard] = useState(card);

    // Reset the flipped state whenever the card change
    useEffect(() => {
        if(flipped){
            setFlipped(false);
            setTimeout(() => {
                setCurrentCard(card);
            }, 500);
        }
        else{
            setCurrentCard(card);
        }
    }, [card]);

    const handleFlip = () => {
        setFlipped(!flipped);
    };

    return (
        <div className={`flashcard ${flipped ? 'flipped' : ''}`} onClick={handleFlip}>
            <div className="front">
                <h2>{currentCard.question}</h2>
            </div>
            <div className="back">
                <h2>{currentCard.answer}</h2>
            </div>
        </div>
    );
};

export default Flashcard;