function MonthPrinter(month) {

    if (month < 1 || month > 12) {
        console.log(`Error!`);
    } else {
        if (month < 2) {
            console.log("January");
        } else if (month < 3) {
            console.log("February");
        } else if (month < 4) {
            console.log("March");
        } else if (month < 5) {
            console.log("April");
        } else if (month < 6) {
            console.log("May");
        } else if (month < 7) {
            console.log("June");
        } else if (month < 8) {
            console.log("July");
        } else if (month < 9) {
            console.log("August");
        } else if (month < 10) {
            console.log("September");
        } else if (month < 11) {
            console.log("October");
        } else if (month < 12) {
            console.log("November");
        } else
            console.log("December");
    }
}


MonthPrinter(13)