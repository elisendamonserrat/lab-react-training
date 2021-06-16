import React, { Component } from 'react'

export class LikeButton extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            value: 0, 
            color: 'purple'
        };
    }

    handleClick = () => {
        console.log(this.state)
        this.setState({
            value: this.state.value + 1,
            color: this.changeColor(),
        })
    }

    changeColor = () => {
        const colors = ['purple','blue','green','yellow','orange','red'];
        const currentColorIndex = colors.indexOf(this.state.color);
        let newColor = colors[currentColorIndex + 1];
        return newColor
    }

    render() {

        return (
            <button style={{background: this.state.color}}
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mx-2"
            onClick={this.handleClick}
            >
            {this.state.value} Like
            </button>
        )
    }
}

export default LikeButton
