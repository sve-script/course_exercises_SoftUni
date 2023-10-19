function dungeonsDark(dungeonRooms) {

    let startingHealth = 100;
    let startingCoins = 0;

    let newArr = [];
    let arrToString = "";
    let counterRooms = 0;

    let stringArr = dungeonRooms.toString();

    for (let i = 0; i < stringArr.length; i++) {

        if (stringArr[i] !== "|" && stringArr[i] !== " ") {
            arrToString += stringArr[i];
        } else {
            newArr.push(arrToString);
            arrToString = "";
        }
    }

    newArr.push(arrToString);
    let isDeath = false;

    for (let j = 0; j < newArr.length; j += 2) {
        if (isDeath) {
            break;
        }
        counterRooms++
        switch (newArr[j]) {
            case "potion": startingHealth += Number(newArr[j + 1]);
                if (startingHealth > 100) {
                    console.log(`You healed for ${(Number(Number(newArr[j + 1])) - (startingHealth - 100))} hp.`);
                    startingHealth = 100;
                    console.log(`Current health: ${startingHealth} hp.`);
                } else {
                    console.log(`You healed for ${Number(newArr[j + 1])} hp.`);
                    console.log(`Current health: ${startingHealth} hp.`)
                }
                break;
            case "chest": startingCoins += Number(newArr[j + 1]);
                console.log(`You found ${newArr[j + 1]} bitcoins.`);
                break;

            default: startingHealth -= Number(newArr[j + 1]);
                if (startingHealth <= 0) {
                    console.log(`You died! Killed by ${newArr[j]}.`);
                    console.log(`Best room: ${counterRooms}`);
                    isDeath = true;
                    break;

                } else {
                    console.log(`You slayed ${newArr[j]}.`);
                }
                break;
        }
    }

    if (!isDeath) {
        console.log(`You've made it!`)
        console.log(`Bitcoins: ${startingCoins}`)
        console.log(`Health: ${startingHealth}`)
    }
}