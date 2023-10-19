function accountBallance(input) {
    let index = 0;
    let incomingValue = input[index];
    index++

    let totalValue = 0;
    let newIncrease = 0;

    while (incomingValue !== "NoMoreMoney") {
        if (incomingValue < 0) {
            console.log("Invalid operation!");
            break;
        }
        totalValue += Number(incomingValue)
        newIncrease = Number(incomingValue)
        console.log(`Increase: ${newIncrease.toFixed(2)}`);
        incomingValue = input[index];
        index++

    }

    console.log(`Total: ${totalValue.toFixed(2)}`);

}

accountBallance(["120",
"45.55",
"-150"])
