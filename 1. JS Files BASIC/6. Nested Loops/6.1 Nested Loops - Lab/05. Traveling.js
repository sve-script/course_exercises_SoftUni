function traveling(input) {

    let index = 0;
    let destination = input[index];
    index++
    let neededMoney = Number(input[index]);
    index++

    finish = false;
    let totalSaveMoney = 0;

    while (destination !== "End") {
        for (let i = index; i < input.length; i++) {

            if (totalSaveMoney >= neededMoney) {
                totalSaveMoney = 0;
                console.log(`Going to ${destination}!`);
                destination = input[i];
                i++
                index++
                neededMoney = Number(input[i]);
                i++
                index++
                break;
            }
            let saveMoney = Number(input[i]);
            totalSaveMoney += saveMoney
            index++
        }
    }

}

traveling(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])

