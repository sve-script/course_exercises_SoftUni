function sumOfTwoNumbers(input) {

    let intervalStart = Number(input[0]);
    let intervalEnd = Number(input[1]);

    let magicNumber = Number(input[2]);

    flag = false;
    let counter = 0;

    for (let x = intervalStart; x <= intervalEnd; x++) {
        if (flag) {
            break;
        }
        let sum = 0;

        for (let y = intervalStart; y <= intervalEnd; y++) {
            counter++
            sum = x + y;
            if (sum === magicNumber) {
                console.log(`Combination N:${counter} (${x} + ${y} = ${magicNumber})`);
                flag = true;
                break;
            }

        }

    }

    if (!flag) {
        console.log(`${counter} combinations - neither equals ${magicNumber}`);
    }
}

sumOfTwoNumbers([88, 888, 1000])