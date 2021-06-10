import React, { Component } from 'react'

export class Container extends Component {
    render() {
        const flexColum = this.props.col ? this.props.col :'';
        return (
            <div className={`container mx-auto flex my-3 mb-8 ${flexColum}`}>
                {this.props.children}
            </div>
        )
    }
}

export default Container