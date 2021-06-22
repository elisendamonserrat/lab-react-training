import React, { Component } from 'react'
import profiles from './../data/berlin.json';

export class FaceBook  extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selected: '',
        }
    }

    countriesArray = () => {
        const countriesArray = profiles.map(profile => profile.country);
        const countriesUnique = countriesArray.filter((item, index) => countriesArray.indexOf(item) === index);
        return countriesUnique;
    }

    handleClick = (event) => {
        const selectedCountry = event.target.attributes.class.ownerElement.childNodes[0].parentNode.innerHTML;
        this.setState({
            selected: selectedCountry,
        })
    }


    render() {
        const countriesArray = this.countriesArray();
        const { selected } = this.state;

        return (
            <div className="flex flex-col text-center mx-auto">
                <div className="mx-auto">
                    {countriesArray.map((country, index) => {
                        return(
                            <button 
                                key={index} 
                                className={`border-2 border-gray-900 w-1/6 px-1 py-1 ml-2 mb-2 ${country === selected ? 'bg-blue-200' : ''} `}
                                onClick={this.handleClick}
                            >
                            {country}
                            </button>
                        )
                    })}
                </div>
                <div className="mx-auto w-4/5 flex flex-col content-center">
                {profiles.map((profile, index) => {
                        return(
                            <div key={index} className={`flex container border-2 border-gray-900 mx-auto my-2 px-4 py-4 ${profile.country === selected ? 'bg-blue-200' : ''}`}>
                                <div className="mr-8 w-1/4">
                                    <img className="w-4/5 object-contain" src={profile.img} alt={profile.firstName} />
                                </div>
                                <div className="text-left text-lg  w-1/2">
                                    <p><strong>First Name</strong>: {profile.firstName}</p>
                                    <p><strong>Last Name</strong>: {profile.lastName}</p>
                                    <p><strong>Country</strong>: {profile.country}</p>
                                    <p><strong>Type</strong>: {profile.isStudent ? 'Student' : 'Teacher'}</p>
                                </div>
                            </div>
                        )
                }
                )}
                </div>
            </div>
        )
    }
}

export default FaceBook 
