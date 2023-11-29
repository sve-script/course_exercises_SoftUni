function sumOfOddNumbers(n) {

    let sum = 0;
    let printNumber = 1;

    for (let i = 1; i <= n; i++) {
        console.log(printNumber);
        sum+=printNumber
        printNumber+=2;
    }
    console.log(`Sum: ${sum}`);

}

sumOfOddNumbers(3)