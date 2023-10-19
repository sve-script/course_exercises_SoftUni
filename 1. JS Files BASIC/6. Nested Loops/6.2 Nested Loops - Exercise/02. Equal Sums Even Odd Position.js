function equalSumsEvenOdd(input) {

    let startingNumber = Number(input[0]);
    let finishNumber = Number(input[1]);

    let startLength = startingNumber.toString().length
    let buff = ""
    finish = false

    for (let i = startingNumber; i <= finishNumber; i++) { // tuk vzimame chisloto
        let even = 0;
        let odd = 0;

        for (let y = 0; y < startLength; y++) {
            let symbolNumber = i.toString()[y];

            if ((y + 1) % 2 === 0) {
                even += Number(symbolNumber)
            } else {
                odd += Number(symbolNumber)
            }
        }

        if (even === odd) {
            buff += `${i} `
        }
    }

    console.log(buff);
}
equalSumsEvenOdd(["123456",
"124000"])

