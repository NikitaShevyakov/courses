"use sctrct";

// Место для первой задачи
function firstTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    // Пишем решение вот тут
    for(var i = 0; i < arr.length; i++){
        result.push(arr[i]);
    }

    // Не трогаем
    return result;
}

// Место для второй задачи
function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    // Пишем решение вот тут
    for(var i = 0; i < data.length; i++){
        let value = data[i];
        let typeValue = typeof value;

        if(typeValue === 'string'){
            data[i] = value+=" - done";
        } else if (typeValue === 'number'){
            data[i] = value*=2;
        }
    }
    
    // Не трогаем
    return data;
}

// Место для третьей задачи
function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    // Пишем решение вот тут
    for(var i = data.length; i > 0; i--){    
        result.push(data[i-1]);
    }
    // Не трогаем
    return result;
}