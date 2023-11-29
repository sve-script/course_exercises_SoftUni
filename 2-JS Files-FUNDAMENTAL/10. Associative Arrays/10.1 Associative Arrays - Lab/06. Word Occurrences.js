function wordOccurrences(array) {

    let wordOccurrences = {};


    for (let el of array) {

        if (wordOccurrences.hasOwnProperty(el)) {
            wordOccurrences[el]++
        } else {
            wordOccurrences[el] = 1;
        }
    }

    let objSortArray = Object.entries(wordOccurrences).sort((a, b) => b[1] - a[1]);

    let printObj = Object.fromEntries(objSortArray);

    for (let key in printObj) {
        console.log(`${key} -> ${printObj[key]} times`);
    }
}
wordOccurrences(["dog", "bye", "city", "dog", "dad", "boys", "ginger"])