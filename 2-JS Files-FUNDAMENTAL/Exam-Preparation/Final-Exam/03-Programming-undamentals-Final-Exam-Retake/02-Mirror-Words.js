function mirrorWords([string]) {

    let mirrorWords = [];

    let match = /([@#])[A-Za-z]{3,}\1{2}[A-Za-z]{3,}\1/g;

    let mirrorMatch = /\w+/g;

    let words = string.match(match);

    if (words) {
        console.log(`${words.length} word pairs found!`);

        for (let pairs of words) {
            let firstHalf = pairs.slice(0, pairs.length / 2);
            let secondHalf = pairs.slice(pairs.length / 2).split(``).reverse().join(``);

            if (firstHalf == secondHalf) {
                mirrorWords.push(pairs)
            }
        }

    } else {
        console.log(`No word pairs found!`);
    }

    let mirrors = [];
    for (let el of mirrorWords) {

        let token = el.match(mirrorMatch);
        mirrors.push(token.join(` <=> `))
    };

    if (mirrors.length > 0) {
        console.log(`The mirror words are:`);
        console.log(mirrors.join(`, `));
    } else {
        console.log(`No mirror words!`);
    }
}
mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]

)