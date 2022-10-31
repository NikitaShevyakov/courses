'use strict';

// Место для первой задачи
function calculateVolumeAndArea(length) {
    if(typeof (length) !== 'number' || !Number.isInteger(length) || length < 0){
        return 'При вычислении произошла ошибка';
    }
    let s = 6 * Math.pow(length,2);
    let v = Math.pow(length, 3);
    return `Объем куба: ${v}, площадь всей поверхности: ${s}`;
}   

console.log(calculateVolumeAndArea(5));// 'Объем куба: 125, площадь всей поверхности: 150'

console.log(calculateVolumeAndArea(15));// 'Объем куба: 3375, площадь всей поверхности: 1350'

console.log(calculateVolumeAndArea(15.5));// 'При вычислении произошла ошибка'

console.log(calculateVolumeAndArea('15'));// 'При вычислении произошла ошибка'

console.log(calculateVolumeAndArea(-15));// 'При вычислении произошла ошибка'

// Место для второй задачи
function getCoupeNumber(seatNumber) {
    if (typeof (seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
        return "Ошибка. Проверьте правильность введенного номера места";
    }

    if (seatNumber === 0 || seatNumber > 36) {
        return "Таких мест в вагоне не существует";
    }

    return Math.ceil(seatNumber / 4);
}

console.log(getCoupeNumber(33)); // 9

console.log(getCoupeNumber(7)); // 2

console.log(getCoupeNumber(300)); // "Таких мест в вагоне не существует"

console.log(getCoupeNumber(0)); // "Таких мест в вагоне не существует"

console.log(getCoupeNumber(7.7)); // "Ошибка. Проверьте правильность введенного номера места"

console.log(getCoupeNumber(-10)); // "Ошибка. Проверьте правильность введенного номера места"

console.log(getCoupeNumber('Hello')); // "Ошибка. Проверьте правильность введенного номера места"