function newHouse(input) {

    let typeFlower = input[0];
    let numbFlower = Number(input[1]);
    let budget = Number(input[2]);

    let finalPrice = 0;

    let rosesPrice = 5;
    let dahliasPrice = 3.80;
    let tulipsPrice = 2.80;
    let narcissusPrice = 3.00;
    let gladiolusPrice = 2.50;

    switch (typeFlower) {
        case `Roses`:
            if (numbFlower > 80) {
                finalPrice = (rosesPrice * numbFlower) * 0.90;
            } else {
                finalPrice = rosesPrice * numbFlower
            }
            break;
        case `Dahlias`:
            if (numbFlower > 90) {
                finalPrice = (dahliasPrice * numbFlower) * 0.85;
            } else {
                finalPrice = dahliasPrice * numbFlower
            }
            break;
        case `Tulips`:
            if (numbFlower > 80) {
                finalPrice = (tulipsPrice * numbFlower) * 0.85;
            } else {
                finalPrice = tulipsPrice * numbFlower
            }
            break;
        case `Narcissus`:
            if (numbFlower < 120) {
                finalPrice = (narcissusPrice * numbFlower) * 1.15;
            } else {
                finalPrice = narcissusPrice * numbFlower
            }
            break;
        case `Gladiolus`:
            if (numbFlower < 80) {
                finalPrice = (gladiolusPrice * numbFlower) * 1.20;
            } else {
                finalPrice = gladiolusPrice * numbFlower
            }
            break;
    }

    if (budget >= finalPrice) {
        console.log(`Hey, you have a great garden with ${numbFlower} ${typeFlower} and ${(budget - finalPrice).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money, you need ${Math.abs(finalPrice - budget).toFixed(2)} leva more.`);
    }

}

newHouse(["Narcissus",
"119",
"360"])


