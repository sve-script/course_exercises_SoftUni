function sumNumbers(input) {
    let index = 0;
    let number = Number(input[index]);
    index++;

    let sumNumbers = Number(input[index]);
    index++

    let totalSum = 0;
    while (totalSum <= number) {

        totalSum += sumNumbers
        sumNumbers = Number(input[index]);
        index++

    }

    console.log(totalSum);
}
sumNumbers(["20",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6"])



