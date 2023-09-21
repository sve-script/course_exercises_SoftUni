function finalCompetition(input) {

    let dancers = Number(input[0]);
    let points = Number(input[1]);
    let season = input[2];
    let place = input[3];

    let moneyPrize = 0;

    switch (place) {
        case "Bulgaria":
            moneyPrize = points * dancers
            switch (season) {
                case "summer":
                    moneyPrize = moneyPrize - (moneyPrize * 0.05);
                    break;
                case "winter":
                    moneyPrize = moneyPrize - (moneyPrize * 0.08);
                    break;
            }
            break;

        case "Abroad":
            moneyPrize = dancers * points + ((dancers * points) * 0.50);
            switch (season) {
                case "summer":
                    moneyPrize = moneyPrize - (moneyPrize * 0.10);
                    break;
                case "winter":
                    moneyPrize = moneyPrize - (moneyPrize * 0.15);
                    break;
            }
            break;
    }


    let charity = moneyPrize * 0.75;
    let totalPrice = moneyPrize - charity


    console.log(`Charity - ${charity.toFixed(2)}`);
    console.log(`Money per dancer - ${(totalPrice / dancers).toFixed(2)}`);

}
finalCompetition(["25",
"98",
"winter",
"Bulgaria"])

