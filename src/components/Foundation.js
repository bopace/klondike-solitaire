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
    render() {
        return (
            <div className="Foundation">
                
            </div>
        );
    }
}

export default Foundation;