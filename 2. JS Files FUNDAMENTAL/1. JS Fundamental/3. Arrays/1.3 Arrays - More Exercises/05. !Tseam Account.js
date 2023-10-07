function TseamAcc(arr) {

    let newArr = arr.toString();
    let word = "";
    arr = [];

    let games = [];


    for (let i = 0; i < newArr.length; i++) {

        if (newArr[i] !== " " && newArr[i] !== ",") {
            word += newArr[i];
        } else {
            arr.push(word);
            word = "";
        }
    }

    arr.push(word)

    let j = 0;

    while (arr[j] !== "Play!") {

        let indicator = games.indexOf(arr[j + 1]);

        switch (arr[j]) {
            case "Uninstall":
                if (games.includes(arr[j + 1])) {
                    games.splice(indicator, 1);
                    j++;
                    break;
                } else {
                    j++
                    break;
                }

            case "Install":
                if (games.includes(arr[j + 1])) {
                    j++
                    break;
                } else {
                    games.push(arr[j + 1]);
                    j++
                }
                break;
            case "Update":
                if (games.includes(arr[j + 1])) {
                    games.push(games[indicator]);
                    games.splice(indicator, 1);
                    j++
                } else {
                    j++;
                    break;
                }
                break;
            case "Expansion":
                let gg = "";
                let gameToString = arr[j + 1].toString();
                let gameLength = gameToString.length;
                for (let k = 0; k < gameLength; k++) {
                    if (gameToString[k] !== "-") {
                        gg += gameToString[k];
                    } else {
                        let check = games.includes(gg)
                        if (check) {
                            for (let z = 0; z < games.length; z++) {
                                if (games[z] == gg) {
                                    let v2 = "";
                                    for (let expansion = k + 1; expansion < gameLength; expansion++) {
                                        v2 += gameToString[expansion];
                                    }
                                    games.splice(z + 1, 0, `${gg}:${v2}`);
                                    j++;
                                    break;
                                }
                            }
                        } else {
                            j++;
                            break;
                        }

                    }
                }
                break;
            default: games.push(arr[j])
                break;
        }
        j++
    }
    console.log(games.join(` `))

}
TseamAcc(['CS WoW Diablo',
    `Install CS`,
    `Install WoW`,
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion GTA-6',
    `Install Minecraft`,
    `Install Overwatch`,
    `Uninstall GTA-6`,
    `Update Warcraft`,
    `Expansion Diablo-Immortal`,
    'Play!']
)

// solution 2 by divxp
function TseamAcc(arr) {

    let games = arr.shift().split(` `)
    // premahvame pyrviq index ot arr (conver to String) i sys .split(` `), razdelqme string rezultata sys space, i otnovo go prevryshta v masiv, 

    let newArr = arr.join(` `).split(` `);
    arr = newArr;

    let j = 0;

    while (arr[j] !== "Play!") {
        let flag = false;

        let indicator = games.indexOf(arr[j + 1]);

        switch (arr[j]) {
            case "Uninstall":
                if (games.includes(arr[j + 1])) {
                    games.splice(indicator, 1);
                }
                break;
            case "Install":
                if (!games.includes(arr[j + 1])) {
                    games.push(arr[j + 1]);
                }
                break;
            case "Update":
                if (games.includes(arr[j + 1])) {
                    games.push(games[indicator]);
                    games.splice(indicator, 1);
                }
                break;
            case "Expansion":
                let gameExpansion = "";
                let gameToString = arr[j + 1].toString();
                let splitGame = gameToString.split(`-`);
                gameExpansion = splitGame[0];

                if (games.includes(gameExpansion)) {
                    let gameIndex = games.indexOf(gameExpansion)
                    games.splice(gameIndex + 1, 0, splitGame.join(`:`));
                }
                break;
            default: games.push(arr[j]);
                flag = true
                break;
        }
        if (flag) {
            j++
        } else {
            j += 2

        }
    }
    console.log(games.join(` `))

}