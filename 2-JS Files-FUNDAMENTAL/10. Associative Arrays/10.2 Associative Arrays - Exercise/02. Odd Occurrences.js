function oddOccurrences(input) {

    let map = new Map();

    let splitInput = input.split(` `);

    for (let word of splitInput) {
        let lowerCaseWord = word.toLowerCase()
        if (map.has(lowerCaseWord)) {
            let currentValue = map.get(lowerCaseWord)
            map.set(lowerCaseWord, currentValue + 1)
        } else {
            map.set(lowerCaseWord, 1)
        }
    }

    let printValue = "";

    for (let [key, value] of map) {
        if (value % 2 == 1) {
            printValue += `${key} `
        }
    }

    console.log(printValue);
}
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food')