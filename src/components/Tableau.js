import React, { Component } from 'react';

class Tableau extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: this.props.cards,
        };
    }
    getCards() {
        if (this.state.cards.length === 0) {
            return "Empty";
        } else {
            return this.state.cards;
        }
    }
    render() {
        return (
            <div className="Tableau">
                {this.getCards()}
            </div>
        );
    }
}

export default Tableau;