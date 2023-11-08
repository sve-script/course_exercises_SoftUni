function wordTracker(array) {

    let searchingWords = array.shift().split(` `);

    let obj = {};

    for (let wordToAdd of searchingWords) {
        obj[wordToAdd] = 0;
    }

    for (let el of array) {
        if (el in obj) {
            obj[el]++
        }
    }

    let sortObj = Object.entries(obj).sort((a, b) => b[1] - a[1]);

    let objToPrint = Object.fromEntries(sortObj);

    for (let key in objToPrint) {
        console.log(`${key} - ${objToPrint[key]}`);
    }
}
wordTracker([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']

)