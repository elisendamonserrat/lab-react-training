import React, { Component } from 'react'

export class Container extends Component {
    render() {
        return (
            <div className="container mx-auto flex mt-3">
                {this.props.children}
            </div>
        )
    }
}

export default Container