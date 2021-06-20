import React, { Component } from 'react'

const diceSides = [
    '/img/dice1.png',
    '/img/dice2.png',
    '/img/dice3.png',
    '/img/dice4.png',
    '/img/dice5.png',
    '/img/dice6.png',
]

export class Dice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            diceValue: this.randomDice(diceSides),
        }
    }

    randomDice = (diceSides) => {
        const index = Math.floor(Math.random() * ((diceSides.length -1) - 0 + 1) + 0);
        return diceSides[index]
    }

    handleClick = () => {
        const emptyDice = '/img/dice-empty.png';

        this.setState({
            diceValue: emptyDice
        })

        setTimeout(() => {
           return this.setState({            
                diceValue: this.randomDice(diceSides),
            })
        }, 1000);
    }

    render() {
        return (
            <div>
                <img 
                    className="w-1/4" 
                    src={this.state.diceValue} 
                    onClick={this.handleClick}
                    alt="dice output" />             
            </div>
        )
    }
}

export default Dice
