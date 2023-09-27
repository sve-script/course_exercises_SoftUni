function bitcoinMining(array) {

    let counter = 0;

    let dayBuyingFirstBitcoin = 0;

    let goldPerGram = 67.51;
    let bitcoinPrice = 11949.16;

    let totalGoldDigging = 0;

    for (let i = 0; i < array.length; i++) {
        counter++;

        if (counter % 3 === 0) {
            totalGoldDigging += array[i] * 0.70;
        } else {
            totalGoldDigging += array[i];
        }
        if (dayBuyingFirstBitcoin === 0) {
            if ((totalGoldDigging * goldPerGram) > bitcoinPrice) {
                dayBuyingFirstBitcoin = counter;
            }
        }
    }

    let totalBitcoin = Math.floor((totalGoldDigging * goldPerGram) / bitcoinPrice)

    if (totalBitcoin == 0) {
        console.log(`Bought bitcoins: ${totalBitcoin}`);
        console.log(`Left money: ${(totalGoldDigging * goldPerGram).toFixed(2)} lv.`);
    } else {
        console.log(`Bought bitcoins: ${totalBitcoin}`);
        console.log(`Day of the first purchased bitcoin: ${dayBuyingFirstBitcoin}`);
        console.log(`Left money: ${(totalGoldDigging * goldPerGram - totalBitcoin * bitcoinPrice).toFixed(2)} lv.`);
    }

}
bitcoinMining([50, 100])