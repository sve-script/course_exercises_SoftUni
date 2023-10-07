function TseamAcc(arr) {

    let games = arr.shift().split(` `)

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