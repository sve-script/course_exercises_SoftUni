function tournamentOfChrismas(input) {

    let days = Number(input[0]);

    let games = 0;
    let winGames = 0;

    let totalMoney = 0;

    let moneyPerDay = 0;

    let winDays = 0;


    for (let i = 1; i < input.length; i += 2) {

        let command = input[i];

        if (command == "Finish") {

            if (games / 2 < winGames) {
                winDays++
                moneyPerDay += moneyPerDay * 0.1;
            }
            winGames = 0;
            games = 0;
            totalMoney += moneyPerDay;
            moneyPerDay = 0;
            i--
            continue;
        }
        games++

        let result = input[i + 1];

        switch (result) {
            case "win": winGames++
                moneyPerDay += 20;
                break;
            case "lose":
                break;
        }
    }


    if (days / 2 < winDays) {
        totalMoney += totalMoney * 0.2;
        console.log(`You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    }




}
tournamentOfChrismas(["2",
    "volleyball",
    "win",
    "football",
    "lose",
    "basketball",
    "win",
    "Finish",
    "golf",
    "win",
    "tennis",
    "win",
    "badminton",
    "win",
    "Finish"])
tournamentOfChrismas(["3",
    "darts",
    "lose",
    "handball",
    "lose",
    "judo",
    "win",
    "Finish",
    "snooker",
    "lose",
    "swimming",
    "lose",
    "squash",
    "lose",
    "table tennis",
    "win",
    "Finish",
    "volleyball",
    "win",
    "basketball",
    "win",
    "Finish"])

