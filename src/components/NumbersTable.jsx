import React, { Component } from 'react'

export class NumbersTable extends Component {

    creatArrayOf = () => {
        const { limit } = this.props;
        const numbersArray = [];

        for (let i = 0; i <= limit; i++) {
            numbersArray.push(i)
        }

        return numbersArray;
    }

    evenNumbers = (number) => {
        return number % 2 === 0 ? `red` : '';
    }
    
    render() {
        const numbersTable = this.creatArrayOf();
        return (
            <div className="flex wrap w-1/2">
                {numbersTable.map((element, index) => {
                    return (
                        <div className="border-2 border-black w-1/2 px-4 py-4 text-center" 
                        key={index} 
                        style={{background: this.evenNumbers(element)}}
                        > 
                        {element} 
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default NumbersTable
