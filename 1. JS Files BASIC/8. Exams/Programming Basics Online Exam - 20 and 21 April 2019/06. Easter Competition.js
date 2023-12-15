function easterCompetition(input) {

    let kozunakNumber = Number(input[0]);

    let chefName = "";
    let totalScore = 0;

    for (let i = 1; i < input.length; i++) {

        let name = input[i];
        i++;
        let command = input[i];

        let totalCurrentScore = 0;

        while (command !== "Stop") {

            totalCurrentScore += Number(command);

            i++;
            command = input[i];
        }

        if (totalScore < totalCurrentScore) {
            chefName = name;
            totalScore = totalCurrentScore;

            console.log(`${chefName} has ${totalScore} points.`);
            console.log(`${chefName} is the new number 1!`);
            continue;
        }

        console.log(`${name} has ${totalCurrentScore} points.`);
    }

    console.log(`${chefName} won competition with ${totalScore} points!`);

}
easterCompetition(["2",
    "Chef Angelov",
    "9",
    "9",
    "9",
    "Stop",
    "Chef Rowe",
    "10",
    "10",
    "10",
    "10",
    "Stop"])


// easterCompetition(["3",
//     "Chef Manchev",
//     "10",
//     "10",
//     "10",
//     "10",
//     "Stop",
//     "Natalie",
//     "8",
//     "2",
//     "9",
//     "Stop",
//     "George",
//     "9",
//     "2",
//     "4",
//     "2",
//     "Stop"])
