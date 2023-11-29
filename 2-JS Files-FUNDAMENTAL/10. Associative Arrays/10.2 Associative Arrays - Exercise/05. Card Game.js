function cardGame(array) {

    let playerGame = {};
    let cardN = {
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        10: 10,
        J: 11,
        Q: 12,
        K: 13,
        A: 14
    }
    cardPower = {
        S: 4,
        H: 3,
        D: 2,
        C: 1
    }

    for (let player of array) {
        let splitValue = player.split(`: `);
        let name = splitValue[0];
        let cards = splitValue[1].split(`, `);



        if (playerGame.hasOwnProperty(name)) {
            playerGame[name].push(...cards)
            continue;
        }

        playerGame[name] = cards
    }

    let entries = Object.entries(playerGame);

    let playersCards = {};

    for (let [player, deck] of entries) {
        let uniqueCards = new Set(deck);

        let totalPower = 0;

        for (let card of uniqueCards) {
            let cardNumber = card.slice(0, card.length - 1);
            let cardsPowers = card.slice(card.length - 1);

            totalPower += cardN[cardNumber] * cardPower[cardsPowers]
            debugger

        }

        playersCards[player] = totalPower
    }

    for (let key in playersCards) {
        console.log(`${key}: ${playersCards[key]}`);
    }

}
cardGame([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
]

)