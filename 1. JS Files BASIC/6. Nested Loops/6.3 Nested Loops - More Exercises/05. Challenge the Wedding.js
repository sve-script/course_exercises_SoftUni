function challengeTheWedding(input) {

    let mans = Number(input[0]);
    let womans = Number(input[1]);

    let seatedPlaces = Number(input[2]);
    let flag = false

    let printValue = ""
    let totalDates = 0;
    for (let m = 1; m <= mans; m++) {
        let buffer = ""
        if (flag) {
            break;
        }

        for (let w = 1; w <= womans; w++) {
            totalDates++
            if (totalDates > seatedPlaces) {
                flag = true;
                break;
            }
            buffer = (`(${m} <-> ${w}) `);
            printValue += buffer
        }
    }

    console.log(printValue);
}
challengeTheWedding([2, 2, 3])