'use strict';

function fib(val) {
    if(typeof(val) !== 'number' || !Number.isInteger){
        return "";
    }

    let number1 = 0;
    let number2 = 1;
    let result = '';

    for(let i=0; i < val; i++){

        if(i == 0){
            result = `${number1}`;
        } else if (i == 1){
            result += ` ${number2}`;
        } else {
            let newVal = number1 + number2;
            result += ` ${newVal}`;
    
            number1 = number2;
            number2 = newVal;
        }              
    }

    return result;
}
console.log(fib(4));// ''0 1 1 2"
console.log(fib(7)); // ''0 1 1 2 3 5 8"
console.log(fib('7')); // ''"
console.log(fib(1)); // "0"
console.log(fib(0)); // ''"
