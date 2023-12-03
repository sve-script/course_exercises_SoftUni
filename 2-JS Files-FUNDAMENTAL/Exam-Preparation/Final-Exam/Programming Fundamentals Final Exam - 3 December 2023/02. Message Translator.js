function messageTranslator(input) {

    let messageCount = Number(input.shift());

    let pattern = /(!)(?<command>[A-Z][a-z]{3,})\1:\[(?<group>[A-Za-z]{8,})\]/;

    for (let msg of input) {

        let match = pattern.exec(msg)

        if (match) {

            let { command, group } = match.groups;

            let ascii = [];

            for (let el of group) {
                ascii.push(el.charCodeAt())
            }

            console.log(`${command}: ${ascii.join(` `)}`);

        } else {
            console.log(`The message is invalid`);
        }

    }



}
// messageTranslator(["3",

//     "go:[outside]",

//     "!drive!:YourCarToACarWash",

//     "!Watch!:[LordofTheRings]"]);

messageTranslator(["2",

    "!Send!:[IvanisHere]",

    "*Time@:[Itis5amAlready"])