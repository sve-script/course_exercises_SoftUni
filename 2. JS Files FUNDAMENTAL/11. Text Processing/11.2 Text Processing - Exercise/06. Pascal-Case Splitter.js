function pascalCase(text) {

    let textArray = [];

    let currentWord = "";

    for (let char of text) {

        if (char === char.toUpperCase()) {

            textArray.push(currentWord);
            currentWord = "";
            currentWord += char;

        } else {
            currentWord += char
        }

    }

    textArray.push(currentWord)

    console.log(textArray.splice(1).join(`, `));

}
pascalCase('ThisIsSoAnnoyingToDo')