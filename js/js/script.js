'use strict';

function declOfNum(number, words) {  
    return words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? Math.abs(number) % 10 : 5]];
}

// Место для первой задачи
function getTimeFromMinutes(val) {
    let result;

    if(!typeof('number') || !Number.isInteger(val) || val < 0){
        result = "Ошибка, проверьте данные";
    } else {
        const oneHour = 60;
        let hours = Math.floor(val/oneHour);
        let minutes = val - (hours * oneHour);   
        let ref_hours = declOfNum(hours,[ 'час', 'часа', 'часов']);
        let ref_minutes = declOfNum(minutes, [ 'минута', 'минуты', 'минут']);
        result = `Это ${hours} ${ref_hours} и ${minutes} ${ref_minutes}`;
    }    

    return result;
}

console.log(getTimeFromMinutes(150)); // "Это 2 часа и 30 минут"
console.log(getTimeFromMinutes(50)); // "Это 0 часов и 50 минут"
console.log(getTimeFromMinutes(0)); // "Это 0 часов и 0 минут"
console.log(getTimeFromMinutes(-150)); // "Ошибка, проверьте данные"

// Место для второй задачи
function findMaxNumber(a,b,c,d) {
    if (typeof(a) !== 'number' ||
        typeof(b) !== 'number' ||
        typeof(c) !== 'number' ||
        typeof(d) !== 'number') {
        return 0;
    } else {
        return Math.max(a, b ,c, d);
    }
}

console.log(findMaxNumber(1, 5, 6.6, 11)); //=>  11
console.log(findMaxNumber(1, 5, '6', '10')); // =>  0