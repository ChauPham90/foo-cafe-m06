let x = 5;
let typeOfX = typeof x;
console.log(typeOfX);


let arr = [1, 2, 3];
let typeOfArr = typeof arr;
console.log(typeOfArr);

let y;
console.log(typeof y); // -> 'undefined'


let baz = 'Hello World';
console.log(baz[0]); //-> "H"
console.log(baz.length); //-> 11

let hw = 'Hello World!';
console.log(hw.toUpperCase()); // -> 'HELLO WORLD'

let hw2 = 'Hello World!';
console.log(hw2.slice(3, 8)); // -> 'lo Wo'
console.log(hw2.startsWith('He')); // -> true
console.log(hw2.indexOf('World')); // -> 6


let arrStr = ['john', 'jane', 'jack'];
console.log(arrStr[0]);

let arr2 = ['john', 'jane', 'jack'];
let a = 1;
console.log(arr2[a]); // -> jane
arr2.push('fady');
console.log(arr2[arr2.length - 1]);

console.log(Math.sqrt(9));