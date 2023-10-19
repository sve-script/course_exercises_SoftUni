function englishNameOfTheLastDigit(number) {

    let numAsString = number.toString()

    let array = [`zero`,'one', 'two', `three`, `four`, `five`, `six`, `seven`, `eight`, `nine`]

    let lastNumber = 0;

    let printValue = "";

    for (let i = 0; i < numAsString.length; i++) {

        if (i + 1 == numAsString.length) {
            lastNumber = Number(numAsString[i]);
            break;
        }
    }


    for (let j = 0; j <= lastNumber; j++) {
        printValue = array[j];
    }

    console.log(printValue);


}

englishNameOfTheLastDigit(561464)