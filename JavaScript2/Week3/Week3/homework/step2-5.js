/* eslint-disable no-undef */
/* eslint-disable no-console */
'use strict';

function multiplyAll(arr) {
    // eslint-disable-next-line
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
        let tinyArr = 1;
        for (let j = 0; j < arr[i].length; j++) {
            tinyArr = tinyArr * arr[i][j];
        }
        product = product * tinyArr;
    }

    return product;
}

const result = multiplyAll([
    [1, 2],
    [3, 4],
    [5, 6]
]);
console.log(result); // 720

// Do not change or remove anything below this line
module.exports = multiplyAll;