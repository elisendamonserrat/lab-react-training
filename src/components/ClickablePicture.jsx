import React, { Component } from 'react'

export class ClickablePicture extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayImg: this.props.img,
            toggle: false,
        }
    }

    handleOnClick = () => {
        const { img, imgClicked } = this.props;

        if (!this.state.toggle) {
            this.setState({
                displayImg: imgClicked,
                toggle: !this.state.toggle,
            })
        } else {
            this.setState({
                displayImg: img,
                toggle: !this.state.toggle,
            })
        }
    }
    
    render() {
        const { displayImg } = this.state;
        return (
            <div>
                <img className="w-1/2" src={displayImg} alt="Alan profile" onClick={this.handleOnClick}/>
            </div>
        )
    }
}

export default ClickablePicture
