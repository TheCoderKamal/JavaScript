let arr = [1, 2, 3, 4, 5];

// odd
let oddNumbers = arr.filter(num => num % 2 !== 0);

// even
let evenNumbers = arr.filter(num => num % 2 === 0);

console.log("Odd Numbers : [" + oddNumbers + "]");
console.log("Even Numbers : [" + evenNumbers + "]");
