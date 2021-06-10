import React from 'react'

export default function Rating(props) {
    
    const ratings = Math.round(props.children);
    const starsArray = [];

    for (let i = 1; i <= 5 ; i++) {
        let star = '★';

        if (i > ratings) {
            star = '☆';
        }
        starsArray.push((<span>{star}</span>))
    }

    return (
        <div>
            <p>Rating: {starsArray} ({props.children}/5)</p>
        </div>
    )
}
