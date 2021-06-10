import React, { Component } from 'react'

export default class CreditCard extends Component {

   render() {
        const idCardStyles = {
            background: this.props.bgColor, 
            color: this.props.color
        }

        const cardNumber = (number) => {
            const lastFourDigits = number.substring(number.length - 4);
            return `●●●● ●●●● ●●●● ${lastFourDigits}`
        }

        const formatDate = (month, year) => {
            const yearFormat = year.substring(year.length -2);
            return month.length <= 1 ? `0${month}/${yearFormat}` :  `${month}/${yearFormat}`
        }

        const { type, number, expirationMonth, expirationYear, bank, owner } = this.props;
        
       return (
            <div style={idCardStyles} className="w-1/3 px-4 py-1 rounded-lg mr-4">
                <div className="container mt-2"> 
                    <img className="w-1/12 ml-auto" src={type === "Visa" ? './img/visa.png' : './img/master-card.svg'} alt="type of credid card"/>
                </div>
                <div className="text-center mt-3">
                    <p className="mt-2 text-2xl ">{cardNumber(number)}</p>
                </div>
                <div>
                    <div className="flex w-1/2 justify-between mt-4">
                        <p>Expires {formatDate(expirationMonth.toString(), expirationYear.toString())}</p>
                        <p>{bank}</p>
                    </div>
                    <p>{owner}</p>
                </div>                
            </div>
        )
    }
}