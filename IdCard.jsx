import React from 'react'

const IdCard = (props) => {
    const heightFormat = (num) => {
        const numToString = num.toString();
        return numToString.charAt(0) + '.' + numToString.slice(1) + 'm' 
    }

    return (
        <div className="container border-2 border-gray-900 mx-auto my-8 px-4 py-4 flex">
            <div className="mr-8">
                <img src={props.picture} alt={props.firstName} />
            </div>
            <div className="text-left">
                <p><strong>First Name</strong>: {props.firstName}</p>
                <p><strong>Last Name</strong>: {props.lastName}</p>
                <p><strong>Gender</strong>: {props.gender}</p>
                <p><strong>Height</strong>: {heightFormat(props.height)}</p>
                <p><strong>Birth</strong>: {props.birth.toDateString()}</p>
            </div>
        </div>
    )
}
export default IdCard

