function agencyProfit(input) {

    let name = input[0];

    let numberAdultTickets = Number(input[1]);
    let numberKidTickets = Number(input[2]);

    let netSalesPrice = Number(input[3]);
    let tax = Number(input[4]);

    let netSalesForKid = netSalesPrice - (netSalesPrice * 0.70) + tax;

    let adultPrice = netSalesPrice + tax;

    let totalPrice = numberAdultTickets * adultPrice + numberKidTickets * netSalesForKid;

    let profit = totalPrice * 0.20;

    console.log(`The profit of your agency from ${name} tickets is ${profit.toFixed(2)} lv.`);

}
agencyProfit(["WizzAir",
    "15",
    "5",
    "120",
    "40"])
