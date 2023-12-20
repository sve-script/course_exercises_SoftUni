function mathOperation(numbOne, numbTwo, operator) {

    let sum;

    switch (operator) {
        case "+":
            sum = numbOne + numbTwo
            break;
        case "-":
            sum = numbOne - numbTwo
            break;
        case "*":
            sum = numbOne * numbTwo
            break;
        case "/":
            sum = numbOne / numbTwo
            break;
        case "%":
            sum = numbOne % numbTwo
            break;
        case "**":
            sum = numbOne ** numbTwo
            break;
    }
    console.log(sum);

}
mathOperation(5, 6, '+')