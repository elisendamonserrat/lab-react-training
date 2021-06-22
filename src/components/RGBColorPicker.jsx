import React, { Component } from 'react'

export class RGBColorPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    
    render() {
        return (
            <div className="flex flex-col">
                <label className="my-4 text-lg">
                   <span className="border-2 bg-red-600 px-4 py-2 mr-2"/> R: 
                   <input 
                    className="px-2 ml-2 border-2"
                    type="number"
                    value="0"
                   />
                </label>

                <label className="my-4 text-lg">
                   <span className="border-2 bg-green-600 px-4 py-2 mr-2"/> G: 
                   <input 
                    className="px-2 ml-2 border-2"
                    type="number"
                    value="0"
                   />
                </label>

                <label className="my-4 text-lg">
                   <span className="border-2 bg-black px-4 py-2 mr-2" /> B: 
                   <input 
                    className="px-2 ml-2 border-2"
                    type="number"
                    value="0"
                   />
                </label>
            </div>
        )
    }
}

export default RGBColorPicker
