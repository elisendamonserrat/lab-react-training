import React, { Component } from 'react'
import Rating from './Rating';

export class DriverCard extends Component {
    render() {
        const { name, rating, img, car } = this.props;

        return (
            <div className="px-4 py-6 rounded-lg mt-6 mr-4 bg-blue-700 text-white flex justify-center items-center text-xl">
                <div className="w-1/2">
                    <img className="ml-auto rounded-full h-40 w-40" src={img} alt={name} />
                </div>
                <div className="w-1/2 text-left ml-8">
                    <h1 className="text-3xl	font-semibold">{name}</h1>
                    <Rating>{rating}</Rating>
                    <p>{car.model} - {car.licensePlate}</p>
                </div>
            </div>
        )
    }
}

export default DriverCard
