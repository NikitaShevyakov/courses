"use sctrct";

const lines = 5;
let result = '';
// Проверяется именно переменная result, формируйте строку в ней

for(let i = 0; i <= lines; i ++){
    let maxLenghtRow = lines - i;
    for(let j = 0; j < maxLenghtRow; j++){        
        result+=" ";        
    }    
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }

    result += "\n";
}