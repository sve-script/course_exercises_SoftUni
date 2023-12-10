function heroRecruitment(input) {

    let command = input.shift();

    let heroes = {};

    while (command !== "End") {

        let splitCommand = command.split(` `);

        switch (splitCommand[0]) {

            case "Enroll": enroll(splitCommand[1]);
                break;
            case "Learn": learn(splitCommand[1], splitCommand[2]);
                break;
            case "Unlearn": unlearn(splitCommand[1], splitCommand[2])
                break;

        }
        command = input.shift();
    }

    console.log(`Heroes:`);

    for (let key in heroes) {
        console.log(`== ${key}: ${heroes[key].join(`, `)}`);
    }


    function enroll(heroName) {

        if (heroes.hasOwnProperty(heroName)) {
            return console.log(`${heroName} is already enrolled.`);
        } else {
            return heroes[heroName] = [];
        }
    }

    function learn(heroName, spell) {

        if (heroes.hasOwnProperty(heroName)) {

            if (heroes[heroName].includes(spell)) {
                return console.log(`${heroName} has already learnt ${spell}.`);
            } else {
                return heroes[heroName].push(spell)
            }
        } else {
            return console.log(`${heroName} doesn't exist.`);
        }
    }

    function unlearn(heroName, spell) {

        if (heroes.hasOwnProperty(heroName)) {

            let spellIndex = heroes[heroName].indexOf(spell);

            if (spellIndex >= 0) {

                return heroes[heroName].splice(spellIndex, 1)

            } else {
                return console.log(`${heroName} doesn't know ${spell}.`);
            }

        } else {
            return console.log(`${heroName} doesn't exist.`);
        }
    }
}

heroRecruitment([

    "Enroll Stefan",
    "Enroll Stefan",
    "Learn Stefan ItShouldWork",
    "Learn Stefan ItShouldWork",
    "Learn Ivan asdasd",
    "Unlearn Stefan Alabala",
    "Learn Stefan Alabala",
    "Learn Stefan Alabalanica",
    "Unlearn Ivan ItShouldWork",
    "Unlearn Stefan nqmatakavamagiq",

    "End"])