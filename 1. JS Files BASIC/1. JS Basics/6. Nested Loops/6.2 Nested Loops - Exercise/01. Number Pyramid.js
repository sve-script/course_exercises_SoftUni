function numberPyramid(input) {
    let n = Number(input[0]);
    let printNumber = 1;
    toFinish = false

    for (let row = 1; row <= n; row++) {
        let buff = "";
        for (let col = 1; col <= row; col++) {
            buff += `${printNumber} `;
            if (printNumber === n) {
                toFinish = true
                break;
            }
            printNumber++
        }
        console.log(buff);
        if (toFinish) {
            break;
        }
    }
}

numberPyramid(["7"])