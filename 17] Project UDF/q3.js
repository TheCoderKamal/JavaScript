// Write a function convertKilometersToMiles(kilometers) that converts kilometers to miles and returns the result.

const convertKilometersToMiles = (kilometers) => {
    const milesPerKilometer = 0.621371;
    return kilometers * milesPerKilometer;
}

console.log(`Miles : ${convertKilometersToMiles(10)}`); 