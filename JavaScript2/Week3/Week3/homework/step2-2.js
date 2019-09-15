/* eslint-disable no-console */
'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
    const numbers = [startIndex];
    while (startIndex < stopIndex) {
        startIndex = startIndex + 1;
        numbers.push(startIndex);
    }
    for (let i = 0; i < numbers.length; i++) {
        threeCallback(numbers[i]);
        fiveCallback(numbers[i]);
    }
    return console.log(numbers);
}

function sayThree(number) {
    if (number % 3 == 0) {
        console.log('Say three!');
    }
}

function sayFive(number) {
    if (number % 5 == 0) {
        console.log('Say five!');
    }
}

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;