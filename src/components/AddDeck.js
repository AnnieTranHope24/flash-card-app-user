import React, { useState } from 'react';
import { db } from '../config/firebase';
import { collection, addDoc } from 'firebase/firestore';
import Popup from 'reactjs-popup';
import './AddDeck.css';
const AddDeck = () => {
    const [deckName, setDeckName] = useState('');
    const [cards, setCards] = useState([{questions:'', answer:''}]);

    const addCard = () => {
        setCards([...cards, {questions:'', answer:''}]);
    };

    const handleCardChange = (index, field, value) => {
        const updatedCards = [...cards];
        updatedCards[index][field] = value;
        setCards(updatedCards);
    };

    const handleAddDeck = async (e) => {
        e.preventDefault();

        const newDeck = {
            name: deckName,
            cards,
            createdAt: new Date()
        }
    };
    
    return(
        <div>
            <Popup
                trigger={<button className="add-deck-button">Add Deck</button>}
                modal
                nested
            >
                {(close) => (
                <div className="modal">
                    <div className="modal-header">
                    <h2>Add a New Deck</h2>
                    </div>
                    <div className="modal-content">
                    <p>Welcome to GFG!!!</p>
                    </div>
                    <div className="modal-actions">
                    <button className="modal-close-button" onClick={close}>
                        Close Modal
                    </button>
                    </div>
                </div>
                )}
            </Popup>
        </div>
    );
};

export default AddDeck;