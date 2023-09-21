function logistics(input) {
    index = 0;
    let numberOfCargo = Number(input[index]);
    index++
    let cargo = 0;
    let cargoTotal = 0;
    let van = 0;
    let truck = 0;
    let train = 0;

    for (let i = 1; i < input.length; i++) {
        cargo = Number(input[i])
        cargoTotal += Number(input[i]);
        if (cargo <= 3) {
            van += Number(input[i])
        } else if (cargo >= 4 && cargo <= 11) {
            truck += Number(input[i])
        } else {
            train += Number(input[i])
        }
    }

    let avgPrice = ((van * 200) + (truck * 175) + (train * 120)) / cargoTotal
    console.log(avgPrice.toFixed(2));
    console.log(`${(van/cargoTotal*100).toFixed(2)}%`);
    console.log(`${(truck/cargoTotal*100).toFixed(2)}%`);
    console.log(`${(train/cargoTotal*100).toFixed(2)}%`);
}
logistics([4, 1, 5, 16, 3])