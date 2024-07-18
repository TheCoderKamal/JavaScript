// Q3. Find factorial of a number using function

const factorial = (num) => {
    let ans = 1
    for (let i = 1; i <= num; i++) {
        ans = ans * i;
    }
    
    return ans;
}

console.log(factorial(5));

