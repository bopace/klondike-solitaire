import React, { Component } from 'react';
import Card from './Card';

class Tableau extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: this.props.cards,
        };
    }
    render() {
        return (
            <div className="Tableau">
                {this.state.cards}
            </div>
        );
    }
}

export default Tableau;