function uniquePINCodes(input) {
    let index = 0;
    let firstBiggestNumber = Number(input[index]);
    index++;
    let secondBiggestNumber = Number(input[index]);
    index++

    for (let f = 1; f <= firstBiggestNumber; f++) {
        let numberOne = 0;
        if (f % 2 == 0) {
            numberOne = f
        }
        for (let s = 1; s <= secondBiggestNumber; s++) {
            let numberTwo = 0;
            if (s % 2 == 0) {
                numberTwo = s;
            }
            console.log(`${numberOne} ${numberTwo}`);
        }

    }
}
uniquePINCodes(["8",
    "7"])


