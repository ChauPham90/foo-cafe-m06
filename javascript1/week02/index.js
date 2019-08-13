//1
console.log('hello world!');
console.log('Halo, dunia!');
console.log('Ciao, mondo!');
console.log('Hola, mundo!');

//2
console.log("I'm awesome "); // replace single quote to double quote

//3
var x;
console.log("the value of my variable x will be: whateverYouThinkItWillLog");
console.log(x); // it will be undefined because x wasn't assigned
x = 2;
console.log(" Now the value of x epual to 2 because I just did assign it.")
console.log(x);

//4
var y = "this is a lovely string";
console.log("the value of the strings is : this is a lovely string ");
console.log(y);
y = "I am even more lovely"; // I assign y with a new value .
console.log("the value of the strings is : I am even more lovely");
console.log(y);

//5
var z = 7.25
console.log(z);
var a = Math.floor(z); // i use Math.floor to find the nearest interger
console.log(a);
// function for comparing values of variables
function highest() {
    if (Math.ceil(z) > Math.ceil(a)) {
        return Math.ceil(z);
    } else return a;
}
console.log("highest of z is " + Math.ceil(z));
console.log("highest of a is " + Math.ceil(a));
var highestValue = highest();
console.log(highestValue);

//6
var dogs = [];
console.log("I think the value of the array is null");
console.log(dogs);
var iLoveDog = ["dog", "moreDog", "aLotOfDog"];
console.log(iLoveDog);
iLoveDog.push("baby pig");
console.log(iLoveDog);

//7
let myString = "this is a test";
console.log(myString);
console.log(myString.length);

//8
//assign variables
var dogType = "alaska";
var name = "bi";
var mount = 2;
var takeShower = false;
var enemy = ["mouse", "cat", "stranger"];
//print Chau's thoughts
console.log("The value of my variable dogType is: " + dogType);
console.log("The value of my variable name is: " + name);
console.log("The value of my variable mount is: " + 2);
console.log("The value of my variable takeShower is: " + takeShower);
console.log("The value of my variable enemy is: " + enemy);
console.log("The type of my variable 'dogType' is: string");
console.log("The type of my variable 'name' is: string");
console.log("The type of my variable 'mount' is: number");
console.log("The type of my variable 'takeShower' is: boolean");
console.log("The type of my variable 'enemy' is: array");

//use typeof - time of the truth
console.log(typeof(dogType));
console.log(typeof(name));
console.log(typeof(mount));
console.log(typeof(takeShower));
console.log(typeof(enemy));

//compare types of variables
//put all of variables into an object and assign it .
var compare = { "dogType": dogType, "name": name, "mount": mount, "takeShower": takeShower, "enemy": enemy };
console.log(compare);
// tranfer the object to an array.
var tranferToArray = Object.entries(compare);
//because it is an array with entries, array[index] = [[0, 1], [0, 1], [0, 1]]
// print to test number of index
console.log(tranferToArray);
console.log(tranferToArray[0][0])
console.log(tranferToArray[1][0])
console.log(tranferToArray[2][0])
console.log(tranferToArray[3][0])
console.log(tranferToArray[4][0])
    //program to check type of variables
for (var i = 0; i < tranferToArray.length - 1; i++)
    if (typeof(tranferToArray[i][1]) == typeof(tranferToArray[i + 1][1])) {
        console.log("#" + tranferToArray[i][0] + " and " + "#" + tranferToArray[i + 1][0] + " ARE SAME TYPE");
    } else { console.log("#" + tranferToArray[i][0] + " and " + "#" + tranferToArray[i + 1][0] + " they are not SAME TYPE") };

    //9
var x = 3,
    x = 7 % x; // 7 divide 3 = 2, reminder 1.
console.log(x);
var x = 5,
    x = 11 % x; // 7 divide 5 = 2, reminder 1.
console.log(x);
var x = 20,
    x = 3 % x; // 3 can not divide 20, so reminder 3
console.log(x);
var x = 10,
    x = 1 % x; // 1 can not divide 10, so reminder 1
console.log(x);

//10
// store multiple types in an array
var mutilArray = [2, "dog", "eat", "carrot", false];
console.log(mutilArray);
// compare infinities. According to the result, we can compare infinities.
if (6 / 0 === 10 / 0) {
    console.log("we can compare infinities!");
} else {
    console.log("No way it can work!");
}