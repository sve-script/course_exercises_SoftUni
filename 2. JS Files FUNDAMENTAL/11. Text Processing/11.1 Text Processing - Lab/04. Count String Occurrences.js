function countStringOccurrences(text, word) {

    let splitText = text.split(` `);
    let count = 0
    for (let el of splitText) {
        if (el == word) {
            count++
        }
    }
    console.log(count);

}
countStringOccurrences('This is a word and it also is a sentence',
    'is'
)