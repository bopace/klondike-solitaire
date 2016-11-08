import React, { Component } from 'react';
import Deck from './Deck';
import Foundation from './Foundation';
import Tableau from './Tableau';

class Game extends Component {
    constructor() {
        super();

        let foundations = [];
        for (let i = 0; i < 4; i++) {
            foundations.push(
                <Foundation />
            );
        }

        let tableaus = [];
        for (let i = 0; i < 7; i++) {
            tableaus.push(
                <Tableau cards={[]} />
            );
        }

        this.state = {
            foundations: foundations,
            tableaus: tableaus
        };
    }
    render() {
        return (
            <div className="Game">
                <h1>Deck</h1>
                <Deck />
                <h1>Foundations</h1>
                {this.state.foundations}
                <h1>Tableaus</h1>
                {this.state.tableaus}
            </div>
        );
    }
}

export default Game;