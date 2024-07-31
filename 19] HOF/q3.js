// Given an array of numbers, create a new array containing only the even numbers.

let array = [1, 2, 3, 4, 5];

let evenNumbers = array.filter(num => num % 2 === 0);

console.log("Even Numbers : [" + evenNumbers + "]");
