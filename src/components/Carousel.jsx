import React, { useState } from 'react';

const Carousel = ({ imgs }) => {
    const [ current, setCurrent ] = useState(0);
    const imgArrayLenght = (imgs.length -1);

    const nextSlide = () => {
        setCurrent(current === imgArrayLenght ? 0 : current + 1 );
        console.log('current', current, '- array length', imgArrayLenght)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? imgArrayLenght - 1 : current - 1)
    }

    return (
        <div className="w-1/2 flex items-center ">
            <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mx-2"
             onClick={prevSlide}> 
             prev 
             </button>

            {imgs.map((img, index) => {
                return (
                    <div className="" key={index}>
                        {index === current && 
                            <img src={img} alt="description not provided"/>
                        }
                    </div>
                )
            })}
            <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mx-2"
             onClick={nextSlide}> 
             next 
             </button>

        </div>
    )

}

export default Carousel
