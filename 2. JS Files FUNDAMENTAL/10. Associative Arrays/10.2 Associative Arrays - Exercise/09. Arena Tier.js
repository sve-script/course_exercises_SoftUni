function arenaTier(input) {

    let command = input.shift();

    let gladiatorData = {};

    while (command !== "Ave Cesar") {


        if (command.includes(` -> `)) {
            let [name, skill, power] = command.split(` -> `);

            if (!gladiatorData.hasOwnProperty(name)) {
                gladiatorData[name] = { [skill]: Number(power) }
            } else {
                if (!gladiatorData[name].hasOwnProperty(skill)) {
                    gladiatorData[name][skill] = Number(power);

                } else {
                    if (gladiatorData[name][skill] < Number(power)) {
                        gladiatorData[name][skill] = Number(power);
                    }
                }
            }

        } else {
            let [gladiatorOne, gladiatorTwo] = command.split(` vs `);
            if (gladiatorData.hasOwnProperty(gladiatorOne) && gladiatorData.hasOwnProperty(gladiatorTwo)) {
                for (let key in gladiatorData[gladiatorOne]) {
                    if (gladiatorData[gladiatorTwo].hasOwnProperty(key)) {

                        let totalSkillGladOne = 0;
                        let totalSkillGladTwo = 0;

                        for (let key in gladiatorData[gladiatorOne]) {
                            totalSkillGladOne += gladiatorData[gladiatorOne][key]
                        }

                        for (let key in gladiatorData[gladiatorTwo]) {
                            totalSkillGladTwo += gladiatorData[gladiatorTwo][key]
                        }

                        if (totalSkillGladOne > totalSkillGladTwo) {
                            delete gladiatorData[gladiatorTwo]
                        } else {
                            delete gladiatorData[gladiatorOne]
                        }
                    }
                }
            }
        }

        command = input.shift();
    }

    let gladiatorTotalSkill = {}

    for (let key in gladiatorData) {
        let totalSkill = 0;

        for (let skill in gladiatorData[key]) {

            totalSkill += gladiatorData[key][skill]
        }

        gladiatorTotalSkill[key] = totalSkill
    }

    let entries = Object.entries(gladiatorTotalSkill).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

    for (let [gladiator, power] of entries) {
        console.log(`${gladiator}: ${power} skill`);

        let entriesFullDataInfo = Object.entries(gladiatorData[gladiator]).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
        for (let [technique, skill] of entriesFullDataInfo) {
            console.log(`- ${technique} <!> ${skill}`);
        }
    }

}
arenaTier([
    'Peter -> BattleCry -> 1000',
    'Alex -> BattleCry -> 800',
    'Stefan -> BattleCry -> 700',
    'Alex vs Peter',
    'Stefan vs Alex',
    'tefan vs Ivan',
    'Ave Cesar'
]
)