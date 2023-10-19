function goldMine(input) {

    let index = 0;
    let location = Number(input[index]);
    index++

    for (let i = index; i < input.length; i++) {
        let avgGoldPerDay = Number(input[i]);
        i++
        let days = Number(input[i]);
        i++
        let totalGoldNeeded = avgGoldPerDay * days;
        let totalForThisMine = 0;
        for (let goldPerDay = 0; goldPerDay < days; goldPerDay++) {
            let goldForDays = Number(input[i]);
            i++
            totalForThisMine += goldForDays
        }

        if (totalForThisMine >= totalGoldNeeded) {
            console.log(`Good job! Average gold per day: ${(totalForThisMine / days).toFixed(2)}.`);
        } else {
            console.log(`You need ${((totalGoldNeeded - totalForThisMine) / days).toFixed(2)} gold.`);
        }
        i--
    }

}
goldMine(["1",
"5",
"3",
"10",
"1",
"3"])

