import React, { Component } from 'react'

export class PostSignupMessage extends Component {

    greetingMessage = (nationality) => {
        let greeting;

        switch(nationality) {
            case 'fr':
            greeting = 'Bonjour';
            break;
            case 'de':
            greeting = 'Hallo';
            break;
            default:
            greeting = 'Hello';
        }

        return greeting;
    }

    render() {
        const { email, nationality } = this.props;
        return (
            <div>
                <p>{this.greetingMessage(nationality)} </p>
                <p>Your email address is: {email}</p>
                <p>Your email address is correct</p>
            </div>
        )
    }
}

export default PostSignupMessage
