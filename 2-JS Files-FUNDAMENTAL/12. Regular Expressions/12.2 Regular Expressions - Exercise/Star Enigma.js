function starEnigma(array) {
    const messageCount = parseInt(array.shift(), 10); // Използване на array.shift() за получаване на броя на съобщенията
    let attackedPlanet = [];
    let destroyedPlanet = [];

    let symbolsPattern = /[star]/gi;
    let planetPattern = /@(?<planetName>[A-Za-z]+)[^\@\!\-\:>]*:(?<people>\d+)[^\@\!\-\:>]*!(?<attackType>[AD])![^\@\!\-\:>]*->(?<warriors>\d+)/;

    for (let msg of array) { // Обработка на съобщенията в зависимост от броя им

        let messages = "";

        let key = (msg.match(symbolsPattern) || []).length;
        for (let el of msg) {
            messages += String.fromCharCode(el.charCodeAt() - key);
        }

        let planetMatch = messages.match(planetPattern);
        if (planetMatch) {
            let { planetName, attackType } = planetMatch.groups;
            if (attackType == "A") {
                attackedPlanet.push(planetName);
            } else {
                destroyedPlanet.push(planetName);
            }
        }
    }

    attackedPlanet.sort((a, b) => a.localeCompare(b));
    destroyedPlanet.sort((a, b) => a.localeCompare(b));

    console.log(`Attacked planets: ${attackedPlanet.length}`);
    attackedPlanet.forEach(x => console.log(`-> ${x}`));
    console.log(`Destroyed planets: ${destroyedPlanet.length}`);
    destroyedPlanet.forEach(x => console.log(`-> ${x}`));
}
starEnigma(['3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR']
)