function train(input) {

    let allPassengerInWagon =
        input
            .shift()
            .split(` `)
            .map(el => Number(el));

    let maxCapacity = Number(input.shift());

    let modifiedInput =
        input
            .join(` `)
            .split(` `);

    let j = 0;

    for (let i = 0; i < modifiedInput.length;) {

        let currentCommand = modifiedInput[i];

        if (currentCommand == "Add") {
            add(modifiedInput[i], Number(modifiedInput[i + 1]));
        } else {
            let totalWagonSpace = findPlace(Number(allPassengerInWagon[j]), Number(modifiedInput[i]), Number(maxCapacity));
            if (totalWagonSpace > maxCapacity) {
                j++
            } else {
                allPassengerInWagon[j] = totalWagonSpace
            }
        }
    }

    function add(index, passengers) {
        allPassengerInWagon.push(passengers);
        modifiedInput.splice(index, 2)
        return allPassengerInWagon
    }

    function findPlace(currentSpace, takenSpace, maxPassenger) {
        let sum = Number(currentSpace) + Number(takenSpace);
        if (sum <= maxPassenger) {
            modifiedInput.splice(0, 1)
        }
        return sum;
    }

    console.log(allPassengerInWagon.join(` `));
}


// train(['32 54 21 12 4 0 23',
//     '75',
//     'Add 10',
//     'Add 0',
//     '30',
//     '10',
//     '75']


// )
train(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    `Add 1`,
    '10',
    '8',
    '6',
    `Add 7`]

)