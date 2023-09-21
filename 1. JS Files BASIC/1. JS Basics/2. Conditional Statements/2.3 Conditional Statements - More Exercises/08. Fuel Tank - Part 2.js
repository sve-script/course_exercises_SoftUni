function fuelTankP2(input) {
    let fuelType = input[0];
    let quantity = Number(input[1]);
    let card = input[2];

    let gasoline = 2.22;
    let diesel = 2.33;
    let gas = 0.93;

    let discount = 0;
    if (card == `Yes`) {
        switch (fuelType) {
            case `Gasoline`:
                gasoline -= 0.18
                log
                break;
            case `Diesel`:
                diesel -= 0.12
                break;
            case `Gas`:
                gas -= 0.08
                break;
        }
    }
    if (quantity > 25) {
        discount = 0.90
        switch (fuelType) {
            case `Gasoline`: console.log(`${(quantity * gasoline * discount).toFixed(2)} lv.`);
                break;
            case `Diesel`: console.log(`${(quantity * diesel * discount).toFixed(2)} lv.`);
                break;
            case `Gas`: console.log(`${(quantity * gas * discount).toFixed(2)} lv.`);
        }
    }
    if (quantity >= 20 && quantity <= 25) {
        discount = 0.92
        switch (fuelType) {
            case `Gasoline`: console.log(`${(quantity * gasoline * discount).toFixed(2)} lv.`);
                break;
            case `Diesel`: console.log(`${(quantity * diesel * discount).toFixed(2)} lv.`);
                break;
            case `Gas`: console.log(`${(quantity * gas).toFixed(2)} lv.`);
        }
    } else if (quantity < 20) {
        switch (fuelType) {
            case `Gasoline`: console.log(`${(quantity * gasoline).toFixed(2)} lv.`);
                break;
            case `Diesel`: console.log(`${(quantity * diesel).toFixed(2)} lv.`);
                break;
            case `Gas`: console.log(`${(quantity * gas).toFixed(2)} lv.`);

        }
    }
}
fuelTankP2(["Diesel", "1", "Yes"])