function orders(product, quantity) {

    let printValue;

    switch (product) {
        case "coffee":
            printValue = quantity * 1.50;
            break;
        case "water":
            printValue = quantity * 1.00;
            break;
        case "coke":
            printValue = quantity * 1.40;
            break;
        default:
            printValue = quantity * 2;
            break;
    }

    console.log(printValue.toFixed(2));
}

orders("coffe", 2)







