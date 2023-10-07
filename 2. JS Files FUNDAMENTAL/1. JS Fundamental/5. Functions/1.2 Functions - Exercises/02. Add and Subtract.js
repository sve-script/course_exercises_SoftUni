function result(a, b, c) {

    let sumFirstNumbers = sum(a, b);
    let finalAnswer = subtract(sumFirstNumbers, c)

    function sum(num1, num2) {
        return num1 + num2
    }

    function subtract(sum, num3) {
        return sum - num3
    }


    console.log(finalAnswer);
}

result(23, 6, 10)