function needForSpeed3(input) {

    let numberOfCars = Number(input.shift());

    let cars = {};


    for (let i = 0; i < numberOfCars; i++) {

        let [car, mileage, fuel] = input.shift().split(`|`);

        cars[car] = { "miles": Number(mileage) }
        cars[car]["fuel"] = Number(fuel)

    }

    let command = input.shift();

    while (command !== "Stop") {

        let splitComma = command.split(` : `);

        switch (splitComma[0]) {
            case "Drive": drive(splitComma[1], Number(splitComma[2]), Number(splitComma[3]));
                break;
            case "Refuel": refuel(splitComma[1], Number(splitComma[2]))
                break;
            case "Revert": revert(splitComma[1], Number(splitComma[2]))
                break;
        }

        command = input.shift();
    }

    function drive(vehicle, distance, fuel) {

        if (cars[vehicle]["fuel"] < Number(fuel)) {
            return console.log(`Not enough fuel to make that ride`);
        } else {
            cars[vehicle]["miles"] += Number(distance);
            cars[vehicle]["fuel"] -= Number(fuel);
            console.log(`${vehicle} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
            if (cars[vehicle]["miles"] >= 100000) {
                delete cars[vehicle];
                return console.log(`Time to sell the ${vehicle}!`);
            }
        }
    }
    function refuel(vehicle, fuel) {

        cars[vehicle]["fuel"] += Number(fuel);

        if (cars[vehicle]["fuel"] > 75) {
            console.log(`${vehicle} refueled with ${Number(fuel) - (cars[vehicle]["fuel"] - 75)} liters`);
            return cars[vehicle]["fuel"] = 75;
        } else {
            return console.log(`${vehicle} refueled with ${fuel} liters`);
        }

    }
    function revert(vehicle, km) {

        cars[vehicle]["miles"] -= Number(km);

        if (cars[vehicle]["miles"] < 10000) {
            cars[vehicle]["miles"] = 10000;
        } else {
            console.log(`${vehicle} mileage decreased by ${km} kilometers`);
        }
    }


    for (let automobile in cars) {
        console.log(`${automobile} -> Mileage: ${cars[automobile]["miles"]} kms, Fuel in the tank: ${cars[automobile]["fuel"]} lt.`);
    }
}
needForSpeed3([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
]

)