function ANDProcessors(input) {

    let processorNeeded = Number(input[0]);
    let employee = Number(input[1]);
    let workingDays = Number(input[2]);

    let workingTime = employee * workingDays * 8

    let manufacturedProcessors = Math.floor(workingTime / 3)

    let diff = 0;
    let profit = 0;

    if (processorNeeded <= manufacturedProcessors) {
        diff = manufacturedProcessors - processorNeeded;
        profit = diff * 110.10;
        console.log(`Profit: -> ${profit.toFixed(2)} BGN`);
    } else {
        diff = processorNeeded - manufacturedProcessors
        profit = diff * 110.10;
        console.log(`Losses: -> ${profit.toFixed(2)} BGN`);
    }


}

ANDProcessors(["500",
    "8",
    "20"])
