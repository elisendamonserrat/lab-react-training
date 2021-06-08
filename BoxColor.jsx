import React from 'react'

function BoxColor(props) {

    const { r, g, b} = props;

    const divBackgrounColor = { background: `rgb(${r},${g},${b})`};

    const rgbColor = `rgb(${r},${g},${b})`;

    const RGBToHex = (r,g,b) => {
        r = r.toString(16);
        g = g.toString(16);
        b = b.toString(16);
      
        if (r.length === 1)
          r = "0" + r;
        if (g.length === 1)
          g = "0" + g;
        if (b.length === 1)
          b = "0" + b;
      
        return "#" + r + g + b;
    }
    
    return (
        <div style={divBackgrounColor} className="container border-2 border-gray-900 mx-auto my-8 px-4 py-4">
            <p className="font-bold text-lg text-center">{rgbColor}</p>
            <p className="font-bold text-lg text-center">{RGBToHex(r,g,b)}</p>
        </div>
    )
}

export default BoxColor
