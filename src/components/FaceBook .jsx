import React, { Component } from 'react'
import profiles from './../data/berlin.json';

export class FaceBook  extends Component {
    render() {
        return (
            <div className="w-3/5">
              {profiles.map((profile) => {
                    return(
                        <div className="container border-2 border-gray-900 mx-auto my-8 px-4 py-4 flex">
                            <div className="mr-8 w-1/4">
                                <img className="w-full object-contain" src={profile.img} alt={profile.firstName} />
                            </div>
                            <div className="text-left text-lg">
                                <p><strong>First Name</strong>: {profile.firstName}</p>
                                <p><strong>Last Name</strong>: {profile.lastName}</p>
                                <p><strong>Country</strong>: {profile.country}</p>
                                <p><strong>Type</strong>: {profile.isStudent ? 'Student' : 'Teacher'}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default FaceBook 
