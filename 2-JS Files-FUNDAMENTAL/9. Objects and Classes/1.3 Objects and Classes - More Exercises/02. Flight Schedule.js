function flightSchedule(input) {

    let flyingInformation = {};
    let commandForFlights = input.pop().shift();

    for (let el of input) {

        for (let flights of el) {

            let indexOfSPace = flights.indexOf(` `)
            let numbInfo = flights.slice(0, indexOfSPace)
            let command = flights.slice(indexOfSPace + 1)

            if (!flyingInformation.hasOwnProperty(numbInfo) && command !== `Cancelled`) {
                flyingInformation[numbInfo] = [command];
                continue;
            }

            if (command == `Cancelled`) {
                if (flyingInformation.hasOwnProperty(numbInfo)) {
                    flyingInformation[numbInfo].push(command)
                }
            }
        }
    }

    let entries = Object.entries(flyingInformation);

    for (let el of entries) {

        let [key, array] = el;


        if (commandForFlights == `Cancelled` && array.length == 2) {
            console.log(`{ Destination: '${array[0]}', Status: '${array[1]}' }`)
        } else if (commandForFlights == `Ready to fly` && array.length == 1) {
            console.log(`{ Destination: '${array[0]}', Status: '${commandForFlights}' }`)
        }
    }
}
flightSchedule([['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK430 Cancelled'],
['Cancelled']
]

)