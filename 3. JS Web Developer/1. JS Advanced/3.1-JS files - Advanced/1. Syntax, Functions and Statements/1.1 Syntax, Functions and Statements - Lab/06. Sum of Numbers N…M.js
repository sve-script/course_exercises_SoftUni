function sumOfNumbers(start, end) {

    let sum = 0;

    for (let numb = Number(start); numb <= Number(end); numb++) {

        sum += numb;
    }

    return sum
}
sumOfNumbers('1', '5')