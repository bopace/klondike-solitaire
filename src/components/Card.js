import React, { Component } from 'react';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            suit: this.props.suit,
            value: this.props.value,
        }
    }
    render() {
        let symbol;
        if (this.state.suit === "Spades") {
            symbol = <span className="black-suit">&spades;</span>;
        } else if (this.state.suit === "Hearts") {
            symbol = <span className="red-suit">&hearts;</span>;
        } else if (this.state.suit === "Diamonds") {
            symbol = <span className="red-suit">&diams;</span>;
        } else {
            symbol = <span className="black-suit">&clubs;</span>;
        }
        return (
            <div className="Card">
                {symbol} {this.state.value}
            </div>
        );
    }
}

export default Card;