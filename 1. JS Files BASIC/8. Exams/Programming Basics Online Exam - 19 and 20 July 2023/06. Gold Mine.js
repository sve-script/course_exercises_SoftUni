function goldMine(input) {

    let index = 0;
    let location = Number(input[index]);
    index++

    for (let i = index; i < input.length;) {
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
    }
}
goldMine(["2", // location 
    "10", // sreden dobiv na zlato
    "3", // dni, koito shte se kopae
    "10", // den 1
    "10", // den 2 
    "11", // den 3
    "20", // sreden dobiv na zlato
    "2", // dni koito shte se kopae
    "20", // den 1 
    "10"]) // den 2
