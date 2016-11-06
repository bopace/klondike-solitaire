import React, { Component } from 'react';
import Card from './Card';

// Suits: 0 - Hearts, 1 - Diamonds, 2 - Clubs, 3 - Spades
var suitDict = {0: "Hearts", 1: "Diamonds", 2: "Clubs", 3: "Spades"};
var valueDict = {1: "Ace", 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10, 11: "Jack", 12: "Queen", 13: "King"};

class Deck extends Component {
    constructor() {
        super();
        let cardsInDeck = [];
        for (let i = 0; i < 4; i++) {
            for (let j = 1; j <= 13; j++) {
                cardsInDeck.push(
                    <Card suit={suitDict[i]} value={valueDict[j]} />
                );
            }
        }
        this.shuffleDeck(cardsInDeck);
        this.state = {
            cardsInDeck: cardsInDeck,
            deckSize: 0,
        }
    }
    shuffleDeck(deck) {
        let j, x, i;
        for (i = deck.length; i; i--) {
            j = Math.floor(Math.random() * i);
            x = deck[i - 1];
            deck[i - 1] = deck[j];
            deck[j] = x;
        }
    }
    render() {
        console.log(this.state.cardsInDeck);
        return (
            <div>
                {this.state.cardsInDeck}
            </div>
        );
    }
}

export default Deck;