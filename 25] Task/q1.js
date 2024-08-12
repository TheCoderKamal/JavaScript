// Practice array methods such as push, pop, slice ,splice, shift, unshift, map, filter, reduce.

let array = [1, 2, 3, 4, 5];

array.push(1); 
array.push(2);
console.log(array);

array.pop();
console.log(array);

array.slice(0, 3);
console.log(array);

array.splice(0, 3);
console.log(array);

array.shift();
console.log(array);

array.unshift(23);
console.log(array);

let addNumbers = array.map(number => number * number);
console.log(addNumbers);

let filteredNumbers = array.filter(number => number % 2 !== 0);
console.log(filteredNumbers);

let multiplyNumber = array.reduce((number1, number2) => number1 * number2, 1);
console.log(multiplyNumber);

