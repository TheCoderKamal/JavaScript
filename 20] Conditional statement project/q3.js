//  Write a simple number guessing game. Provide a secret number and a guess. Based on those numbers give players clues if their guess is higher, lower or correct.

let secretNumber = Math.floor(Math.random() * 100) + 1;

let guess = 53;

console.log(secretNumber);

if(guess > secretNumber){
    console.log("Your guess is high!");
}else if(guess === secretNumber){
    console.log("Congratulations! You guessed the correct number!");
}else{
    console.log("Your guess is low!");
}
