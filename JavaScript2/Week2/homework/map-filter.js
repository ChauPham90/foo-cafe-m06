'use strict';

function doubleOddNumbers(numbers) {
    // Replace this comment and the next line with your code
    const oddNumber = numbers.filter((odd) => odd % 2 !== 0);
    numbers = oddNumber.map((multi) => multi * 2);
    return numbers;
}
const myNumbers = [1, 2, 3];
console.log(doubleOddNumbers(myNumbers));
// Do not change or remove anything below this line
module.exports = {
    myNumbers,
    doubleOddNumbers,
};