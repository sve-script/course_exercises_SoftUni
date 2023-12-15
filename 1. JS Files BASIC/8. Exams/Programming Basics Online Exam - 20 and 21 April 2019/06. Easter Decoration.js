function easterDecoration(input) {

    let customers = Number(input[0]);

    let buyingItems = 0;
    let pricesForItems = 0;

    let totalValue = 0;

    for (let i = 1; i < input.length; i++) {

        let command = input[i];

        if (command == "Finish") {

            if (buyingItems % 2 == 0) {
                pricesForItems *= 0.80;
            }
            totalValue += pricesForItems;

            console.log(`You purchased ${buyingItems} items for ${pricesForItems.toFixed(2)} leva.`);
            pricesForItems = 0;
            buyingItems = 0;
            continue;
        }
        buyingItems++

        switch (command) {
            case "basket":
                pricesForItems += 1.5;
                break;
            case "wreath":
                pricesForItems += 3.8;
                break;
            case "chocolate bunny":
                pricesForItems += 7;
                break;
        }
    }

    console.log(`Average bill per client is: ${(totalValue / customers).toFixed(2)} leva.`);


}
easterDecoration(["1",
    "basket",
    "wreath",
    "chocolate bunny",
    "wreath",
    "basket",
    "chocolate bunny",
    "Finish"])

