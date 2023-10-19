function flowerShop(input) {
    let magnolias = Number(input[0]) * 3.25;
    let hyacinths = Number(input[1]) * 4;
    let roses = Number(input[2]) * 3.5;
    let cactus = Number(input[3]) * 8;
    let giftPrice = Number(input[4]);

    let flowersTotalSum = magnolias + hyacinths + roses + cactus;
    let tax = flowersTotalSum * 0.95;

    if (tax >= giftPrice) {
        console.log(`She is left with ${Math.floor(tax - giftPrice)} leva.`);
    } else {
        console.log(`She will have to borrow ${Math.ceil(giftPrice - tax)} leva.`);
    }
}
flowerShop([15, 7, 5, 10, 100])