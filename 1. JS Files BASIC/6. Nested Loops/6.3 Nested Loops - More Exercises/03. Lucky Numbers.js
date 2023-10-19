function luckyNumbers(input) {
    let inputNumber = Number(input[0]);

    flag = false; // ne go polzvah..

    let printNumbers = "";

    for (let n1 = 1; n1 <= 9; n1++) {
        let buff = "";

        for (let n2 = 1; n2 <= 9; n2++) {

            for (let n3 = 1; n3 <= 9; n3++) {

                for (let n4 = 1; n4 <= 9; n4++) {

                    let n1n2Sum = n1 + n2;
                    let n3n4Sum = n3 + n4;

                    if (n1n2Sum === n3n4Sum) {
                        if (inputNumber % n1n2Sum === 0) {
                            buff = n1.toNumber() + n2.toString() + n3.toString() + n4.toString();
                            printNumbers += `${buff} `;
                        }
                    }
                }
            }
        }
    }
    console.log(printNumbers);
}


luckyNumbers([24])