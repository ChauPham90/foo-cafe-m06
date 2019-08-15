'use strict';
// strings!
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
console.log(myString.length);
console.log(myString.replace(/[,]/g, ' '));
// /[partern]/
// g : global match; find all matches rather than stopping after the first match
// 'partern-replace'

// arrays
let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
favoriteAnimals.push('turtle');
console.log(favoriteAnimals);
// from [1] , 0 change, push "meerkat"
favoriteAnimals.splice(1, 0, "meerkat");
console.log('I think the array will be ["blowfish", "meerkat", "capricorn", "giraffe", "turtle"] ')
console.log(favoriteAnimals);
console.log('The array has a length of: ' + favoriteAnimals.length)

favoriteAnimals.splice(3, 1); // at [3], remove 1
console.log(favoriteAnimals)
console.log("The item you are looking for is at index: " + favoriteAnimals.indexOf('meerkat'));

// Js
//1
const sumABC = (a, b, c) => {
    const d = a + b + c;
    return d;
}
console.log('the result of function sumABC(1,2,3) is ' + sumABC(1, 2, 3));

//2
const colorCar = (color) => {
    return "a " + color + " car"
}
console.log(colorCar("red"));

//3
const flowersMeaning = {
        Daisy: "innocence",
        Pansy: "thoughtfulness",
        Chamomile: "relaxation"
    }
    // function print out  all of object's properties and values.
console.log(flowersMeaning)

//4

const vehicleType = (color, code) => {
    if (code == 1) {
        console.log("a " + color + " car")
    } else if (code == 2) {
        console.log("a " + color + " motorbike")
    }
}
vehicleType("blue", 1);
vehicleType("red", 2)

//6
const vehicle = (color, code, age) => {
    if (age > 0) {
        if (code == 1) {
            console.log("a " + color + " " + "used" + " car")
        } else if (code == 2) {
            console.log("a " + color + " " + "used" + " motorbike")
        }
    }
}
vehicle("green", 1, 5);
vehicle("pink", 2, 3);

//5
console.log(3 === 3); // true

//7
const listOfVehicles = ["motorbike", "caravan", "bike", "bycicle", "carriage"]

//8 get third element from above list by using [index] of array
console.log("the third element is " + listOfVehicles[3]);

//9 
const vehicleArray = (color, code, age) => {
    if (age > 1) {
        console.log("a " + color + " used " + listOfVehicles[code - 1])
    } else console.log("a " + color + " new " + listOfVehicles[code - 1])
}
vehicleArray("green", 3, 1)

//10

for (let i = 0; i < listOfVehicles.length; i++) {
    console.log("Amazing Joe's Garage, we service " + listOfVehicles[i] + "!");
}

//11 yes

//12    
const emptyObject = {};

//13
const teachers = {
    Tommy: "",
    Fady: "",
    Albert: "",
    Michel: "",
    Baraah: ""
}

//14
teachers.Tommy = "css";
teachers.Fady = "html & debugging";
teachers.Albert = "git & github";
teachers.Michel = "javascript";
teachers.Baraah = "homework";

console.log(teachers)

//15
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;
// I think x == y turn "true",
// x === y is true because x,y have same values and type
// z == y is true because it was assigned in that way
// z == x is undefined because it was not assigned
console.log(x == y); // OMG false
console.log(x === y); // another false
console.log(z == y); // true
console.log(z == x); // false
//16
let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;

// the order does not matter when o2 and o3 have the same value.
console.log(o3 = o2);
console.log(o2 = o3);


//if I change o1, it will not effect to o3 because ...uhm, why it should be?
o1 = { foo: "make a change" }
console.log("after changing o1, the value of o3 is ", o3)

// if I make a change in o2
o2 = { foo: "foo" }
    // it will not effect to o3 because JS is executed from top to bottom.
console.log("after changing o2, the value of o3 is", o3)
console.log("the changed value of o2 is", o2)
    // because now o2 and o3 have 2 differences value, the order does matter.
console.log(o3 = o2);
console.log(o2 = o3);
// after print, I know that I was wrong, and value of 3 changed by value of 2.

//17
let bar = 42;
typeof typeof typeof bar;
//because when compare string with number, it will tranfer string to number
//so i guess it will return "string"
console.log(typeof typeof bar);