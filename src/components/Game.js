import React, { Component } from 'react';
import Deck from './Deck';

class Game extends Component {
    render() {
        return (
            <div className="Game">
                <Deck />
            </div>
        );
    }
}

export default Game;