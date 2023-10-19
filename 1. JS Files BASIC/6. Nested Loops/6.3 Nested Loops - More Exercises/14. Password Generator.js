function passwordGenerator(input) {
    let n = Number(input[0]);
    let l = Number(input[1]);

    let alphabet = "abcdefghijklmnopqrstuvwxyz";

    let printValue = "";

    for (let x1 = 1; x1 <= n; x1++) {

        for (let x2 = 1; x2 <= n; x2++) {

            for (let i = 0; i < l; i++) {

                let x3 = alphabet[i];

                for (let j = 0; j < l; j++) {
                    let x4 = alphabet[j];

                    for (let x5 = 1; x5 <= n; x5++) {

                        if (x5 > x1 && x5 > x2) {
                            printValue += `${x1}${x2}${x3}${x4}${x5} `;
                        }
                    }
                }
            }
        }
    }
    console.log(printValue);
}

passwordGenerator([3, 2])