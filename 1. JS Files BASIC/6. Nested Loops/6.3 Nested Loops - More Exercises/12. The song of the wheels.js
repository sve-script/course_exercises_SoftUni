function theSongOfTheWheels(input) {

    let m = Number(input[0]);

    let printValue = "";
    let findingPassword = "";
    let counter = 0;

    for (let a = 1; a <= 9; a++) {

        for (let b = 1; b <= 9; b++) {

            for (let c = 1; c <= 9; c++) {

                for (let d = 1; d <= 9; d++) {

                    let ab = a < b;
                    let cd = c > d;

                    if (ab & cd) {
                        if ((a * b + c * d) === m) {
                            counter++
                            printValue += `${a}${b}${c}${d} `;
                            if (counter === 4) {
                                findingPassword = `Password: ${a}${b}${c}${d}`;
                            }
                        }

                    }
                }
            }
        }
    }

    if (counter < 4) {
        findingPassword = `No!`;
    }

    console.log(printValue);
    console.log(findingPassword);
}

theSongOfTheWheels([55])