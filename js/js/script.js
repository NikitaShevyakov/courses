'use strict';

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let str = '';
    if(arr.length > 0) {
        str = 'Семья состоит из:';
        arr.forEach(member => {
            str += ` ${member}`;
        });
    } else {
        str = 'Семья пуста';
    }
    return str;
}

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(item => {
        console.log(item.toLowerCase());
    });
}