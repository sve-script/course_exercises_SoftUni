function pets(input) {

    let missDays = Number(input[0]);
    let foodForMissDays = Number(input[1]);
    let dogFood = Number(input[2]);
    let catFood = Number(input[3]);
    let turtleFood = Number(input[4]) / 1000;

    let dogFoodNeeded = missDays * dogFood
    let catFoodNeeded = missDays * catFood
    let turtleFoodNeeded = missDays * turtleFood

    let totalFood = dogFoodNeeded + catFoodNeeded + turtleFoodNeeded

    if (totalFood <= foodForMissDays) {
        console.log(`${Math.floor(foodForMissDays - totalFood)} kilos of food left.`);
    } else {
        console.log(`${Math.ceil(totalFood - foodForMissDays)} more kilos of food are needed.`);
    }
}
pets([5, 10, 2.1, 0.8, 321])