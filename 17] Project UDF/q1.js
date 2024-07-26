// 1.Write a function to find count of vowel in following string.

const vowelCount = (str) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i].match(/[aeiou]/i)) {
            count += 1;    
        }
    }

    console.log("Count of vowel in string : " + count);
}

vowelCount('Hello World')