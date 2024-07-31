// Given an array of lowercase strings, create a new array with all strings capitalized. 

let array = ["john", "fred", "doe", "red", "green"];

let capitalizedArray = array.map(string => string.toUpperCase());

console.log("Capitalized Array : " + capitalizedArray);