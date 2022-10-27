"use strict";

// Место для первой задачи
function sayHello(name) {
    return `Привет, ${name}!`;
}

// Место для второй задачи
function returnNeighboringNumbers(intVal) {
    let arr = [];
    arr.push(intVal - 1);
    arr.push(intVal);
    arr.push(intVal + 1);
    return arr;
}

// Место для третьей задачи
function getMathResult(val1, val2)
{
    let result = `${val1}`;

    if(typeof(val2) !== 'number' || val2 <= 0 ){
        return val1;
    }

    for(let i = 2; i <= val2; i++){
        result = result + '---' + val1 * i;
    }

    return result;
}

console.log(getMathResult(5, 3)); //даст ответ 5---10---15

console.log(getMathResult(3, 10)); // 3---6---9---12---15---18---21---24---27---30

console.log(getMathResult(10, 5)); // 10---20---30---40---50

console.log(getMathResult(10, '5')); // 10

console.log(getMathResult(10, 0)); // 10

console.log(getMathResult(20, -5)); // 20