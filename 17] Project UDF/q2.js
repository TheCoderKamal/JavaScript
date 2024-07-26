// 2.Write a function calculateSimpleInterest(principal, rate, time) that calculates and returns the simple interest based on the principal amount, interest rate, and time period.


const calculateSimpleInterest = (principal, rate, time) => {
    let simpleInterest = (principal * rate * time) / 100;
    return simpleInterest;
} 

let interest = calculateSimpleInterest(1000, 3.4, 2); 
console.log(`Simple Interest : ${interest}`);