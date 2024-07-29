// Take an array and use all these methods and perform addition subtraction,multiplication for map
// filter them with even number first then with odd numbers,
// and print elments of array in for each Method.

let arr = [1, 2, 3, 4, 5];

// Addition
let addition = arr.map(element => element + 2);

// Subtraction
let subtraction = arr.map(element => element - 3);

// Multiplication
let multiplication = arr.map(element => element * 2)

console.log("Addition : [" + addition + "]");
console.log("Subtraction : [" + subtraction + "]");
console.log("Multiplication : [" + multiplication + "]");