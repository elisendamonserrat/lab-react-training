import React from 'react'

export default function Random(props) {

    const getRandomNum = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
      }

    return (
        <div className="container border-2 border-gray-900 mx-auto my-8 px-4 py-4 flex">
             <p className="font-bold text-lg">Random value between {props.min} and {props.max} => {getRandomNum(props.min, props.max )}</p>
        </div>
    )
}
