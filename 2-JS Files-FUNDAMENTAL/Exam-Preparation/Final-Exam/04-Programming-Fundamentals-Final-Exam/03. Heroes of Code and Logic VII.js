function heroesOfCodeAndLogic(input) {

    let numberOfHeroes = input.shift();

    let heroesData = {};

    let token = input.shift();


    while (token !== `End`) {
        q

        if (token.includes(` - `)) {

            let [command, heroName, MPOrHP, spellNameOrAttacker] = token.split(` - `);

            switch (command) {
                case "CastSpell": castSpell(heroName, MPOrHP, spellNameOrAttacker)
                    break;
                case "TakeDamage": takeDmg(heroName, MPOrHP, spellNameOrAttacker)
                    break;
                case "Recharge": recharge(heroName, MPOrHP)
                    break;
                case "Heal": heal(heroName, MPOrHP)
                    break;
            }
        } else {

            let [heroesName, hp, mp] = token.split(` `);

            heroesData[heroesName] = { "HP": Number(hp), "MP": Number(mp) }
        }

        token = input.shift();
    }

    function castSpell(heroName, mpNeed, spellName) {

        if (heroesData[heroName]["MP"] >= Number(mpNeed)) {
            heroesData[heroName]["MP"] -= Number(mpNeed)
            console.log(`${heroName} has successfully cast ${spellName} and now has ${heroesData[heroName]["MP"]} MP!`);
        } else {
            console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
        }


    }
    function takeDmg(heroName, dmg, attacker) {

        heroesData[heroName]["HP"] -= Number(dmg);

        if (heroesData[heroName]["HP"] > 0) {
            console.log(`${heroName} was hit for ${dmg} HP by ${attacker} and now has ${heroesData[heroName]["HP"]} HP left!`);
        } else {
            console.log(`${heroName} has been killed by ${attacker}!`);
            delete heroesData[heroName]
        }
    }
    function recharge(heroName, mpIncrease) {

        heroesData[heroName]["MP"] += Number(mpIncrease);

        if (heroesData[heroName]["MP"] > 200) {
            console.log(`${heroName} recharged for ${Number(mpIncrease) - (heroesData[heroName]["MP"] - 200)} MP!`);
            heroesData[heroName]["MP"] = 200;
        } else {
            console.log(`${heroName} recharged for ${Number(mpIncrease)} MP!`);
        }
    }
    function heal(heroName, hpIncrease) {
        heroesData[heroName]["HP"] += Number(hpIncrease);

        if (heroesData[heroName]["HP"] > 100) {
            console.log(`${heroName} healed for ${Number(hpIncrease) - (heroesData[heroName]["HP"] - 100)} HP!`);
            heroesData[heroName]["HP"] = 100;
        } else {
            console.log(`${heroName} healed for ${Number(hpIncrease)} HP!`);
        }
    }


    for (let hero in heroesData) {
        console.log(hero);
        console.log(`  HP: ${heroesData[hero]["HP"]}`);
        console.log(`  MP: ${heroesData[hero]["MP"]}`);
    }
}
// heroesOfCodeAndLogic([
//     "4",
//     "Adela 90 150",
//     "SirMullich 70 40",
//     "Ivor 1 111",
//     "Tyris 94 61",
//     "Heal - SirMullich - 50",
//     "Recharge - Adela - 100",
//     "CastSpell - Tyris - 1000 - Fireball",
//     "TakeDamage - Tyris - 99 - Fireball",
//     "TakeDamage - Ivor - 3 - Mosquito",
//     "End"
// ]
// )

heroesOfCodeAndLogic([
    "2",
    "Solmyr 85 120",
    "Kyrre 99 50",
    "Heal - Solmyr - 10",
    "Recharge - Solmyr - 50",
    "TakeDamage - Kyrre - 66 - Orc",
    "CastSpell - Kyrre - 15 - ViewEarth",
    "End"
]
)