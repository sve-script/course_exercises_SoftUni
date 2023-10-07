function simpleCalculator(numb1, numb2, operator) {
    let solution;
    switch (operator) {
        case "add":
            solution = (x, y) => numb1 + numb2;
            break;
        case "subtract":
            solution = (x, y) => numb1 - numb2;
            break;
        case "multiply":
            solution = (x, y) => numb1 * numb2;
            break;
        default:
            solution = (x, y) => numb1 / numb2;
            break
    }
    console.log(solution(numb1, numb2));
}

simpleCalculator(5, 5, 'multiply')
//--------------------------------------------------------------------------------------------------------
//solution two
function simpleCalculate(numbOne, numbTwo, operatorion) {


    function add(a, b) {
        return a + b;
    }
    function subtract(a, b) {
        return a - b;
    }
    function multiply(a, b) {
        return a * b;
    }
    function divide(a, b) {
        return a / b;
    }
    let result = 0;

    if (operatorion == "add") {
        result = add(numbOne, numbTwo)
    } else if (operatorion == "subtract") {
        result = subtract(numbOne, numbTwo)
    } else if (operatorion == "multiply") {
        result = multiply(numbOne, numbTwo)
    } else {
        result = divide(numbOne, numbTwo)
    }

    console.log(result)



}

simpleCalculate(5, 5, `multiply`)