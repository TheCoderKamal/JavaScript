// 1. ARRAY STRING PATTERN- HOF
// Given an array of string generate an array whose first or last character is a
// Sample Input - ["assignment", "problem", "media", "upload"]
// Sample Output - ["assignment", "media"]

let array = ["assignment", "problem", "media", "upload", "kela", "asur", "sasuke"];

let result = array.filter(
    (word) => {
        if(word[0] === 'a' || word[word.length - 1] === 'a'){
            return word;
        }
    }
);

console.log(result);