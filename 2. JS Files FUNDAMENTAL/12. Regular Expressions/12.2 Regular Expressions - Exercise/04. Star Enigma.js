function starEnigma(array) {

    let letters = Number(array.shift());

    let attackedPlanet = [];
    let destroyedPlanet = [];

    let symbolsPattern = /[star]/gi;
    let planetPattern = /@(?<planetName>[A-Za-z]+)[^\@\!\-\:>]*:(?<people>\d+)[^\@\!\-\:>]*!(?<attackType>[AD])![^\@\!\-\:>]*->(?<warriors>\d+)/

    for (let msg of array) {

        let messages = "";

        let match = msg.match(symbolsPattern);
        if (match) {

            for (let el of msg) {
                messages += String.fromCharCode(el.charCodeAt() - match.length)
            }

            let planetMatch = messages.match(planetPattern);

            if (planetMatch) {
                let { planetName, people, attackType, warriors } = planetMatch.groups;
                if (attackType == "A") {
                    attackedPlanet.push(planetName)
                } else {
                    destroyedPlanet.push(planetName)
                }
            }
        }
    }

    attackedPlanet.sort((a, b) => a.localeCompare(b));
    destroyedPlanet.sort((a, b) => a.localeCompare(b))

    console.log(`Attacked planets: ${attackedPlanet.length}`);
    attackedPlanet.forEach(x => console.log(`-> ${x}`));
    console.log(`Destroyed planets: ${destroyedPlanet.length}`);
    destroyedPlanet.forEach(x => console.log(`-> ${x}`));
}
starEnigma(['2',
    'STCDoghudd4=63333$D$0A53333',
    'EHfsytsnhf?8555&I&2C9555SR']

)
