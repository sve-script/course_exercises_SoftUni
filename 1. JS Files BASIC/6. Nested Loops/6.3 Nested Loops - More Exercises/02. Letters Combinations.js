function lettersCombination(input) {

    let firstLetter = input[0];
    let endLetter = input[1];
    let skipLetter = input[2];

    firstFoundLatter = false;
    endFoundLatter = false;

    let indexFirstFound = 0;
    let indexEndFound = 0;

    let alphabet = "abcdefghijklmnopqrstuvwxyz"

    let printValue = "";
    let counter = 0;

    for (let i = 0; i < alphabet.length; i++) {

        let alphabetLetter = alphabet[i];

        if (alphabetLetter === firstLetter) {
            firstFoundLatter = true;
            indexFirstFound = i;
        }

        if (alphabetLetter === endLetter) {
            endFoundLatter = true;
            indexEndFound = i;
        }

        if (firstFoundLatter && endFoundLatter) {
            for (let x = indexFirstFound; x <= indexEndFound; x++) {
                firstFoundLatter = false;
                endFoundLatter = false;

                let buff = ""
                let start = alphabet[x];

                for (let x1 = indexFirstFound; x1 <= indexEndFound; x1++) {
                    let sec = alphabet[x1];

                    for (let x2 = indexFirstFound; x2 <= indexEndFound; x2++) {
                        let third = alphabet[x2];
                        if (start !== skipLetter && sec !== skipLetter && third !== skipLetter) {
                            buff = start + sec + third;
                            printValue += `${buff} `
                            counter++
                        }
                    }
                }
            }
        }
    }

    console.log(`${printValue}${counter}`);
}

lettersCombination(["f", "k", "h"])