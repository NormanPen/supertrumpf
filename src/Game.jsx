import * as React from 'react';
import * as PropTypes from 'prop-types';
import update from 'immutability-helper';

import './Game.css';
import Card from "./Card";
import Animal from "./Animal";


export default class Game extends React.Component {
static defaultProps = {
    title: 'Supertrumpf',
};
static propTypes = {
    title: PropTypes.string,
}   


state = {
    selectedProperty: '',
    playersTurn: true,
    player: [new Animal('Elefant', 'placeholder.png', 3.3, 6000, 70, 1, 40)],
    computer: [new Animal('Nashorn', 'placeholder.png', 1, 9, 2300, 50, 1, 50)],
};

getSelectedPropertyHandler() {
    return property => {
        this.setState((state) => update(state, {selectedProperty: { $set: property } }),
        );
    }
}

    render() {
        const { playersTurn, player, computer, selectedProperty } = this.state;
        return (
            <div>
                <h1>{this.props.title}</h1>
                <div className="info">
                    {playersTurn ? 'Du bist' : 'Der Cpomputer ist'} an der Reihe
                </div>
                <div className="cards">
                    <Card 
                    animal={player[0]} 
                    uncovered={playersTurn}
                    selectedProperty={selectedProperty}
                    onSelectedProperty={this.getSelectedPropertyHandler()}
                    />
                    <Card 
                    animal={computer[0]} 
                    uncovered={!playersTurn}
                    selectedProperty={selectedProperty}
                    />
                </div>
            </div>
        );
    }
}