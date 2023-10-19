function triangleOfNumbers(n) {

    for (let i = 1; i <= n; i++) {
        let printValue = "";

        for (let j = 1; j <= i; j++) {
            printValue+= `${i} `
        }
        console.log(printValue);
    }


}
triangleOfNumbers(15)