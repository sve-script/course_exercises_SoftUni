function revealWords(words, msg) {


    let wordsarr = words.split(`, `)
    let arr = msg.split(` `);

    for (let el of arr) {
        if (el[0] == "*") {
            let checkLength = el.length;
            for (let replaceWord of wordsarr) {
                if (replaceWord.length == el.length) {
                    let indx = arr.indexOf(el);
                    let splice = arr.splice(indx, 1, replaceWord)
                }
            }

        }
    }
    console.log(arr.join(` `));
}
revealWords('great, learning',
    'softuni is ******** place for ***** new programming languages'
)