import React, { Component } from 'react'

export default class Greetings extends Component {
    render() {

        const switchLang = (lang) => {
            switch(lang) {
              case 'de':
                return 'Hallo';
              case 'fr':
                return 'Bonjour';
              case 'es':
                return 'Hola'
              default:
                return 'Hello';
            }
          }

        return (
            <div className="container border-2 border-gray-900 mx-auto my-8 px-4 py-4 flex">
                <p className="font-bold text-lg">{switchLang(this.props.lang)} {this.props.children}</p>
            </div>
        )
    }
}

