function calculator(numb1, operator, numb2){

    let result = 0;
    switch(operator){

        case "+" : 
            result = numb1 + numb2;
            break;
        case "-" :
            result = numb1 - numb2;
            break;
        case "*" :
            result = numb1 * numb2;
            break;
        default :
            result = numb1 / numb2;
            break;
}

console.log(result.toFixed(2));

}
calculator(25.5,
    '-',
    3
    )