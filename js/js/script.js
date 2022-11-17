'use strict';

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    const a =[] , b = [], c = [], rest = [];
    arr.sort();

    arr.forEach((item, index) => {
        
        if(index < 3){
            a.push(item);
        } else if (index < 6){
            b.push(item);
        } else if (index < 9){
            c.push(item);
        } else {
            rest.push(item);
        }

        return [a,b,c,`Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`];
    });
    
    console.log(arr);
}
sortStudentsByGroups(students);