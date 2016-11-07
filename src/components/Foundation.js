import React, { Component } from 'react';
import Card from './Card';

class Foundation extends Component {
    constructor(props) {
        super(props);
        let suit = props.suit;
        let cards = [];
        this.state = {
            suit: suit,
            cards: cards
        };
    }
    getTopCard() {
        if (this.state.cards.length === 0) {
            return "Empty";
        } else {
            return this.state.cards.slice(-1)[0];
        }
    }
    render() {
        return (
            <div className="Foundation">
                {this.getTopCard()}
            </div>
        );
    }
}

export default Foundation;