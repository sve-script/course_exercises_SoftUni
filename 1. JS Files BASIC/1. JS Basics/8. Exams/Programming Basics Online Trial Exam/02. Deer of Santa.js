function deerOfSanta(input) {
    let missingDays = Number(input[0]);
    let foodLeft = Number(input[1]);

    let firstDeerFoodNeeded = Number(input[2]);
    let secondDeerFoodNeeded = Number(input[3]);
    let thirdDeerFoodNeeded = Number(input[4]);

    let totalFoodNeeded = (firstDeerFoodNeeded + secondDeerFoodNeeded + thirdDeerFoodNeeded) * missingDays

    if (foodLeft >= totalFoodNeeded) {
        console.log(`${Math.floor(foodLeft - totalFoodNeeded)} kilos of food left.`);
    } else {
        console.log(`${Math.ceil(totalFoodNeeded - foodLeft)} more kilos of food are needed.`);
    }

}
deerOfSanta(["5",
    "10",
    "2.1",
    "0.8",
    "11"])

