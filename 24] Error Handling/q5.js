function parseNumber(input) {
    try {
        let number = Number(input);
        if (isNaN(number)) {
            throw new TypeError("Invalid number format");
        }
        console.log(`Parsed number: ${number}`);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

parseNumber("42");    
parseNumber("3.14");  
parseNumber("abc");  
parseNumber("");      