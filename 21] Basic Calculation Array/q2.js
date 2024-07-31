// SUM OF ODD- HOF
// Given an array of numbers find the sum of odd elements Sample Input - [1, 2, 3, 4] Sample Output - 4

let array = [1, 2, 3, 4, 5];

let sum = array.filter(num => num % 2 !== 0).reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log("Sum of Odd Numbers : " + sum);