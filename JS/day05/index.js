var str = 'this is my first string';

let me = 'go'; // globally scoped
var i = 'able'; // globally scoped
var y = 3;

const number = 42;

try {
    //number = 99;
} catch (err) {
    console.log(err);
    // expected output: TypeError: invalid assignment to const `number'
    // Note - error messages will vary depending on browser
}

console.log(number);
// expected output: 42

console.log(window.me); // undefined
console.log(window.i); // 'able'

//use of the console in different ways.
console.log('The value of i is ' + i);
console.log('The value of number plus 5 is ' + number + 5);
console.log('The value of number plus 5 is ' + (number + 5));
console.log('The value of the string is ' + i + 'to' + me);