

function kelvintoC(kelvin){
    let C = parseInt(kelvin - 273.15);
    return String(C)+'&deg;C';
}

export {kelvintoC};