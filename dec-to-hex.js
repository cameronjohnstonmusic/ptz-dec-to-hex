const maxApi = require('max-api');

maxApi.addHandler("leftPan", (msg) => {
    console.log("Message recieved");
    convertDecLeft(msg);
});


maxApi.addHandler("rightPan", (msg) => {
    console.log("Message recieved");
    convertDecRight(msg);
});

maxApi.addHandler("tiltUp", (msg) => {
    console.log("Message recieved");
    convertDecUp(msg);
});

maxApi.addHandler("tiltDown", (msg) => {
    console.log("Message recieved");
    convertDecDown(msg);
});


function convertDecLeft(dec) {
    // define the decimal number
    const decimalNum = Math.floor(65535 - (dec * 14.4));

    // convert the decimal number to 4-digit hexadecimal
    const hexNum = decimalNum.toString(16).toUpperCase().padStart(4, '0');

    maxApi.outlet("panLeft", hexNum); // output: the 4-digit hexadecimal number
}

function convertDecRight(dec) {
    // define the decimal number
    const decimalNum = Math.floor(0 + (dec * 14.4));

    // convert the decimal number to 4-digit hexadecimal
    const hexNum = decimalNum.toString(16).toUpperCase().padStart(4, '0');

    console.log(hexNum); // output: the 4-digit hexadecimal number


    maxApi.outlet("panRight", hexNum); // output: the 4-digit hexadecimal number
}

function convertDecUp(dec) {
    // define the decimal number

    const decimalNum = Math.floor(0 + (dec * 14.4));

    // convert the decimal number to 4-digit hexadecimal
    const hexNum = decimalNum.toString(16).toUpperCase().padStart(4, '0');

    console.log(hexNum); // output: the 4-digit hexadecimal number



    maxApi.outlet("tiltUp", hexNum); // output: the 4-digit hexadecimal number
}





function convertDecDown(dec) {
    // define the decimal number

    const decimalNum = Math.floor(65535 - (dec * 14.4));

    // convert the decimal number to 4-digit hexadecimal
    const hexNum = decimalNum.toString(16).toUpperCase().padStart(4, '0');

    console.log(hexNum); // output: the 4-digit hexadecimal number



    maxApi.outlet("tiltDown", hexNum); // output: the 4-digit hexadecimal number
}


