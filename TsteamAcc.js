function catFood(input) {

    let index = 0;
    let locations = Number(input[index]);
    index++

    let avgGoldPerMine = Number(input[index]);
    index++
    let days = Number(input[index]);
    index++

    for (let i = index; i < input.length; i += days) {

        let totalGoldForThisMine = 0;

        for (let j = days; j <= 2 + days; j++) {

            totalGoldForThisMine += Number(input[j]);
        }

        if (totalGoldForThisMine >= avgGoldPerMine) {
            console.log(`Good job! Average gold per day: ${(totalGoldForThisMine / days).toFixed(2)}.`);
        } else {
            console.log(`You need ${(((avgGoldPerMine * days) - totalGoldForThisMine) / days).toFixed(2)} gold.`);
        }
        avgGoldPerMine = Number(input[i + days]);
        i++
        days = Number(input[i + days]);
        i++

    }



}
catFood(["2", // location 
    "10", // sreden dobiv na zlato
    "3", // dni, koito shte se kopae
    "10", // den 1
    "10", // den 2 
    "11", // den 3
    "20", // sreden dobiv na zlato
    "2", // dni koito shte se kopae
    "20", // den 1 
    "10"]) // den 2