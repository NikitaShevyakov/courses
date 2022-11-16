'use strict';

const someString = 'This is some strange string';

function reverse(str) {
    if(typeof str !== 'string'){
        return "Ошибка!";
    }

    let arr = [...str];
    let newStr = '';
    for(let i = arr.length; i > 0 ; i--){
        newStr += arr[i-1];
    }

    return newStr;
}

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    if(arr.length === 0){
        return 'Нет доступных валют';
    }

    let result = 'Доступные валюты:\n';
    arr.forEach(item => {
        if(missingCurr !== item)
            result+= `${item}\n`;
    });
    return result;
}