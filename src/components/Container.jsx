import React, { Children, Component } from 'react'

export class Container extends Component {
    render() {
        return (
            <div className="container mx-auto px-4 py-4 border-2 border-indigo-600">
                {this.props.children}
            </div>
        )
    }
}

export default Container