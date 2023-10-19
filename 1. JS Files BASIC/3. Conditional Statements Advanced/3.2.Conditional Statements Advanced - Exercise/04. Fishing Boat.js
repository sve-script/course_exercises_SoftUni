function fishingBoat(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let fishers = Number(input[2]);

    boatSpringPrice = 3000;
    boatSummerPrice = 4200;
    boatAutumnPrice = 4200;
    boatWinterPrice = 2600;

    let price = 0.0;
    //"Spring", "Summer", "Autumn", "Winter"
    switch (season) {
        case `Spring`:
            price = boatSpringPrice
            break;
        case `Summer`:
        case `Autumn`:
            price = boatSummerPrice
            break;
        case `Winter`:
            price = boatWinterPrice
            break;
    }

    if (fishers <= 6) {
        price *= 0.90
    } else if (fishers > 6 && fishers <= 11) {
        price *= 0.85
    } else {
        price *= 0.75
    }

    if (fishers % 2 == 0) {
        if (season !== `Autumn`) {
            price *= 0.95
        }
    }
    if (budget >= price) {
        console.log(`Yes! You have ${(budget - price).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${Math.abs(price - budget).toFixed(2)} leva.`);
    }
}
fishingBoat(["2000",
    "Winter",
    "13"])





/*Тони и приятели много обичали да ходят за риба, те са толкова запалени по риболова, 
че решават да отидат на риболов с кораб. Цената за наемане на кораба зависи от сезона и броя рибари.
Цената зависи от сезона:
•	Цената за наем на кораба през пролетта е  3000 лв.
•	Цената за наем на кораба през лятото и есента е  4200 лв.
•	Цената за наем на кораба през зимата е  2600 лв.
В зависимост от броя си групата ползва отстъпка:
•	Ако групата е до 6 човека включително  –  отстъпка от 10%.
•	Ако групата е от 7 до 11 човека включително  –  отстъпка от 15%.
•	Ако групата е от 12 нагоре  –  отстъпка от 25%. 
Рибарите ползват допълнително 5% отстъпка ако са четен брой освен ако не е есен - тогава нямат допълнителна отстъпка. 
Напишете функция, която да пресмята дали рибарите ще съберат достатъчно пари. 
 */