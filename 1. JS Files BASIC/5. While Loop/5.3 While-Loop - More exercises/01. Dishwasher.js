function dishwasher(input) {
    index = 0;
    let numbOfBottles = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let totalDetergent = numbOfBottles * 750;
    let count = 0;

    let dishes = 0;
    let pots = 0;

    let totalDetergentUsed = 0;

    while (command !== "End") {
        count++;

        if (count % 3 === 0) {
            totalDetergentUsed += Number(command) * 15;
            pots += Number(command);
        } else {
            totalDetergentUsed += Number(command) * 5;
            dishes += Number(command);
        }

        command = input[index];
        index++

        if (totalDetergent < totalDetergentUsed){
            console.log(`Not enough detergent, ${totalDetergentUsed - totalDetergent} ml. more necessary!`);
            break;
        }

    }

    if (totalDetergent >= totalDetergentUsed) {
        console.log(`Detergent was enough!`);
        console.log(`${dishes} dishes and ${pots} pots were washed.`);
        console.log(`Leftover detergent ${totalDetergent - totalDetergentUsed} ml.`);
    }

}
dishwasher([2, 53, 65, 55, "End"])