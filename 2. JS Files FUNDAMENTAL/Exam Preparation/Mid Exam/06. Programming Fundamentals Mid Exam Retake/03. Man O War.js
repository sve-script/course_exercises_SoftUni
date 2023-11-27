function manOWar(array) {

    let pirateShipStatus = array.shift().split(`>`).map(Number);
    let warshipStatus = array.shift().split(`>`).map(Number)

    let maximumHealthCapacity = Number(array.shift());

    let pirateWin = false;
    let warshipWin = false;

    while (array.length > 0) {
        if (pirateWin) {
            return;
        }
        if (warshipWin) {
            return;
        }

        let fullCommand = array.shift().split(` `);
        let command = fullCommand.shift();

        if (command == "Retire") {
            break;
        }

        switch (command) {
            case "Fire":
                fire(warshipStatus, Number(fullCommand[0]), Number(fullCommand[1]))
                break;

            case "Defend":
                defend(pirateShipStatus, Number(fullCommand[0]), Number(fullCommand[1]), Number(fullCommand[2]),)
                break;

            case "Repair":
                repair(pirateShipStatus, Number(fullCommand[0]), Number(fullCommand[1]), maximumHealthCapacity)
                break;

            case "Status":
                status(pirateShipStatus, maximumHealthCapacity)
                break;
        }

    }



    function fire(arr, index, dmg) {

        if (index < 0 || index > arr.length - 1) {
            return;
        }
        let currentIndexHealth = arr[index] - dmg
        if (currentIndexHealth <= 0) {
            pirateWin = true;
            return console.log(`You won! The enemy ship has sunken.`);

        } else {

            return arr.splice(index, 1, currentIndexHealth)
        }
    }

    function defend(arr, startIndex, endIndex, dmg) {
        if (startIndex < 0 || startIndex >= arr.length || endIndex < 0 || endIndex >= arr.length) {
            return;
        }

        for (let i = startIndex; i <= endIndex; i++) {
            let currentPartStatus = arr[i] - dmg;
            if (currentPartStatus <= 0) {
                warshipWin = true;
                return console.log(`You lost! The pirate ship has sunken.`);
            }
            arr[i] = currentPartStatus;
        }

        return arr;
    }
    function repair(arr, index, health, maxHealth) {
        if (index < 0 || index >= arr.length) {
            return;
        }

        let healthIndex = arr[index] + health;
        if (healthIndex > maxHealth) {
            healthIndex = maxHealth;
        }

        arr.splice(index, 1, healthIndex)
    }
    function status(arr, maxHealth) {
        let count = 0;
        for (let el of arr) {
            if (el < maxHealth * 0.20) {
                count++
            }
        }
        return console.log(`${count} sections need repair.`);
    }


    let pirateSumArray = 0;
    for (let pirateEl of pirateShipStatus) {
        pirateSumArray += pirateEl
    }
    let warshipSumArray = 0;
    for (let warshipEl of warshipStatus) {
        warshipSumArray += warshipEl
    }


    console.log(`Pirate ship status: ${pirateSumArray}`)
    console.log(`Warship status: ${warshipSumArray}`);
}
manOWar(["2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire"])
