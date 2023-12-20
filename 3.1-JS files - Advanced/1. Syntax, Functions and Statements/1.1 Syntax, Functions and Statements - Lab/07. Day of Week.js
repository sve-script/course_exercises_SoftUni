function dayOfWeek(params) {

    let printValue;

    switch (params) {
        case "Monday":
            printValue = 1;
            break;
        case "Tuesday":
            printValue = 2;
            break;
        case "Wednesday":
            printValue = 3;
            break;
        case "Thursday":
            printValue = 4;
            break;
        case "Friday":
            printValue = 5;
            break;
        case "Saturday":
            printValue = 6;
            break;
        case "Sunday":
            printValue = 7;
            break;
        default:
            printValue = "error";
            break;
    }

    return printValue;
}
dayOfWeek('Mondasday')