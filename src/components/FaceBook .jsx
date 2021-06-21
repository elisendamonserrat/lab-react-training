import React, { Component } from 'react'
import profiles from './../data/berlin.json';

export class FaceBook  extends Component {
    render() {
        return (
            <div>
                {profiles.map((profile) => {
                    return(
                        <p>{profile.firstName} </p>
                    )
                })}
                
            </div>
        )
    }
}

export default FaceBook 
