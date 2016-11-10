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
                <Foundation  cardsToTransfer={this.state.cardsToTransfer} updateCardsToTransfer={this.updateCardsToTransfer} />
            );
        }

        let tableaus = [];
        for (let i = 0; i < 7; i++) {
            tableaus.push(
                <Tableau cards={[]}  cardsToTransfer={this.state.cardsToTransfer} updateCardsToTransfer={this.updateCardsToTransfer} />
            );
        }

        let cardsToTransfer = [];

        this.state = {
            foundations: foundations,
            tableaus: tableaus,
            cardsToTransfer: cardsToTransfer,
        };
    }
    updateCardsToTransfer(transferedCards) {
        this.setState({
            cardsToTransfer: transferedCards
        });
    }
    render() {
        return (
            <div className="Game">
                <h1>Deck</h1>
                <Deck cardsToTransfer={this.state.cardsToTransfer} updateCardsToTransfer={this.updateCardsToTransfer} />
                <h1>Foundations</h1>
                {this.state.foundations}
                <h1>Tableaus</h1>
                {this.state.tableaus}
            </div>
        );
    }
}

export default Game;