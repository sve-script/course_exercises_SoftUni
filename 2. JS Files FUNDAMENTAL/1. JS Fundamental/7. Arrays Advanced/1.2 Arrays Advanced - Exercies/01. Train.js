function train(input) {

    let allPassengerInWagon =
        input
            .shift()
            .split(` `)
            .map(el => Number(el));

    let maxCapacity = Number(input.shift());

    while (input.length > 0) {
        let currentCommand = input.splice(0, 1);
        let split = currentCommand.join(` `).split(` `);

        if (split.length > 1) {
            allPassengerInWagon.push(Number(split[1]));
        } else {
            for (let i = 0; i < allPassengerInWagon.length; i++) {
                if ((allPassengerInWagon[i] + Number(split[0])) <= maxCapacity) {
                    allPassengerInWagon[i] += Number(split[0]);
                    break;
                }
            }
        }
    }

    console.log(allPassengerInWagon.join(` `));
}


train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']


)