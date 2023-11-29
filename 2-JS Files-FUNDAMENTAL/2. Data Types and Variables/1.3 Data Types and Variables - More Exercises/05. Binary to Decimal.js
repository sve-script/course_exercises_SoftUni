function binaryToDecimal(numbAsString) {

    let sum = 0;
    let sqrt = 0;

    for (let i = numbAsString.length - 1; i >= 0; i--) {

        let currentNumber = Number(numbAsString[i]);
        sum += (2 ** sqrt) * currentNumber;
        sqrt++
    }

    console.log(sum)

}
binaryToDecimal("11110000")