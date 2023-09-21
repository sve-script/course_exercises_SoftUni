function sumOfTwoNumbers(input) {

    let startingNumber = Number(input[0]);
    let lastNumber = Number(input[1]);
    let magicNumber = Number(input[2]);

    let counter = 0;

    flag = false

    for (let x = startingNumber; x <= lastNumber; x++) {
        for (let y = startingNumber; y <= lastNumber; y++) {
            let result = x + y;
            counter++
            if (result === magicNumber) {
                flag = true
                console.log(`Combination N:${counter} (${x} + ${y} = ${magicNumber})`);
                break;
            }
        }
        if (flag) {
            break;
        }
    }
    if (!flag) {
        console.log(`${counter} combinations - neither equals ${magicNumber}`);
    }

}

sumOfTwoNumbers(["2",
"3",
"5"])



