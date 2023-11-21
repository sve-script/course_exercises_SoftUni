function race(raceInfo) {

    let racersNames = raceInfo.shift().split(`, `);

    let patternName = /[A-Za-z]/g;
    let patternDigit = /\d/g;
    let command = raceInfo.shift();


    let result = {};

    racersNames.forEach(element => {
        result[element] = 0;
    });

    while (command !== `end of race`) {

        let matchName = command.match(patternName).join(``);
        let matchDigit = command.match(patternDigit).map(x => Number(x));


        if (result.hasOwnProperty(matchName)) {

            let newDistance = matchDigit.reduce((acc, value) => acc + value);

            result[matchName] += newDistance
        }

        command = raceInfo.shift();
    }

    let entries = Object.entries(result).sort((a, b) => b[1] - a[1])



    console.log(`1st place: ${entries[0][0]}`);
    console.log(`2nd place: ${entries[1][0]}`);
    console.log(`3rd place: ${entries[2][0]}`);
}
race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
    'Mi*&^%$ch123o!#$%#nne787) ',
    '%$$B(*&&)i89ll)*&) ',
    'R**(on%^&ald992) ',
    'T(*^^%immy77) ',
    'Ma10**$#g0g0g0i0e',
    'end of race']

)