import React, { Component } from 'react';
import Card from './Card';

class Tableau extends Component {
    constructor() {
        super();
        let hiddenCards = [];
        let revealedCards = [];
        this.state = {
            hiddenCards: hiddenCards,
            revealedCards: revealedCards
        };
    }
    render() {
        return (
            <div className="Tableau">
                
            </div>
        );
    }
}

export default Tableau;