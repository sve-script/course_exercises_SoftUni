function reportSystem(input) {

    index = 0;
    let sumNeeded = input[index];
    index++;

    let command = input[index];
    index++;

    let cashCount = 0;
    let cardCount = 0;

    let cashCountMoney = 0;
    let cardCountMoney = 0;

    let totalTransactionCount = 0;

    let totalMoney = 0;

    while (command !== "End") {
        totalTransactionCount++

        let payment = Number(command)
        if (totalTransactionCount % 2 === 1) {
            if (payment > 100) {
                console.log(`Error in transaction!`);
            } else {
                cashCount++;
                totalMoney += payment;
                cashCountMoney += payment
                console.log(`Product sold!`);
            }

        } else {
            if (payment < 10) {
                console.log(`Error in transaction!`);
            } else {
                cardCount++;
                totalMoney += payment;
                cardCountMoney += payment;
                console.log(`Product sold!`);
            }

        }

        if (totalMoney >= sumNeeded) {
            break;
        }

        command = input[index];
        index++

    }

    if (command === "End") {
        console.log(`Failed to collect required money for charity.`);
    } else {
        console.log(`Average CS: ${(cashCountMoney / cashCount).toFixed(2)}`);
        console.log(`Average CC: ${(cardCountMoney / cardCount).toFixed(2)}`);
    }
}

reportSystem([500, 120, 8, 63, 256, 78, 317])