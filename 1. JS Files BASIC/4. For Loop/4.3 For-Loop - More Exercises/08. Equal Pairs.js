function equalPairs(input) {
    let index = 0;
    let length = Number(input[index]);
    index++

   // let highestNumber = Number.MIN_SAFE_INTEGER;
   // let lowerNumber = Number.MAX_SAFE_INTEGER;

    let diff = 0;

    let firstNumber = 0;
    let secondNumber = 0;

    let previousSum = 0;

    for (let i = index; i < input.length; i+=2) {
        let currentNumberOne = Number(input[i]);
        firstNumber = currentNumberOne
       
        let currentNumberTwo = Number(input[i+1]);
        secondNumber = currentNumberTwo

        let sumNumbers = firstNumber + secondNumber // 1
        previousSum = sumNumbers
        if (diff >0 ){

        // if (highestNumber < sumNumbers) {
        //     highestNumber = sumNumbers
        // }

        // if (lowerNumber > sumNumbers) {
        //     lowerNumber = sumNumbers
        } // }
    }
    if (highestNumber == lowerNumber) {
        console.log(`Yes, value=${highestNumber}`);
    } else {
        console.log(`No, maxdiff=${highestNumber - lowerNumber}`);
    }


}
equalPairs([7
    ,34
    ,-33 // 1
    ,52
    ,12 // 64
    ,-32
    ,32 // 0
    ,23
    ,41 // 64
    ,7
    ,25 // 32
    ,34
    ,23 // 57
    ,124
    ,21 // 145
    ,25
    ,56
])