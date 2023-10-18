function treasureHunt(arr) {

    let chest = arr.shift().split(`|`);

    let fullCommand = arr.shift();

    while (fullCommand !== "Yohoho!") {

        let currentCommand = fullCommand.split(` `)
        let command = currentCommand.shift()
        switch (command) {
            case "Loot":
                loot(chest, currentCommand)
                break;
            case "Drop":
                drop(chest, currentCommand)
                break;
            case "Steal":
                steal(chest, currentCommand)
                break;
        }
        fullCommand = arr.shift();
    }


    let counterChestNames = 0;

    for (let el of chest) {
        counterChestNames += el.length
    }

    if (chest.length == 0) {
        console.log(`Failed treasure hunt.`);
    } else {
        console.log(`Average treasure gain: ${(counterChestNames / chest.length).toFixed(2)} pirate credits.`);
    }




    function loot(chestArr, itemsArr) {

        for (let el of itemsArr) {
            if (!chestArr.includes(el)) {
                chestArr.unshift(el)
            }
        }
        return chestArr;
    }

    function drop(chestArr, index) {
        let numbIndex = Number(index)
        if (numbIndex < 0 || numbIndex >= chestArr.length) {
            return;
        }
        let droptItem = chestArr.splice(index, 1).shift();
        return chestArr.push(droptItem)
    }

    function steal(chestArr, numberSteeledItems) {
        let numb = Number(numberSteeledItems)
        let steeledItems = chestArr.splice(-numb);
        console.log(steeledItems.join(`, `));
        return chestArr;
    }

}
// treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",
//     "Loot Wood Gold Coins",
//     "Loot Silver Pistol",
//     "Drop 3",
//     "Steal 3",
//     "Yohoho!"])
treasureHunt(["Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 6",
    "Yohoho!"])
