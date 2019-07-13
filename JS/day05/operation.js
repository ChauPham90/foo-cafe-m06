
console.log(1 == 1); // -> true
console.log(7 == '7'); // -> true
console.log(1 != 2); // -> true
console.log(5 === 5); // -> true
console.log(9 === '9'); // -> false
console.log(3 !== 3); // -> false
console.log(3 !== '3'); // -> true



console.log(4 > 3); // -> true
console.log(3 >= 3); // -> true
console.log(13 < 12); // -> false
console.log(3 <= 4); // -> true



console.log(8 + 9); // -> 17, adds two numbers together.
console.log(20 - 12); // -> 8, subtracts the right number from the left.
console.log(3 * 4); // -> 12, multiplies two numbers together.
console.log(13 / 5); // -> 2, divides the left number by the right.
console.log(8 % 3); /// -> 2, as three goes into 8 twice, leaving 2 left over.modulo
*/


console.log(true && false); //-> false
console.log(false && true); //-> false
console.log(false || true); //-> true
console.log(true || false); //-> true
*/


let x = 6,
    y = 3;
console.log(x < 10 && y > 1); // -> true
console.log(x === 5 || y === 5); // -> false
console.log(x !== y); // -> true

console.log(true === !false);
console.log(false === !true);
 */


let bar = 42;
console.log(typeof bar); //-> 'number' 
console.log(typeof typeof bar); //->  'string'
console.log(typeof typeof typeof bar);
*/


let x = 1,
    y = 5;
console.log(x += 1); //->  x = x + 1;
console.log(x += y); //->  x = x + y
console.log(x -= y); //->  x = x - y
console.log(x *= y); //->  x = x * y
console.log(x /= y); //->  x = x / y
console.log(x %= y); //->  x = x % y
