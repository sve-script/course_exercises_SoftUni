function wordsUppercase(params) {

    let pattern = /\w+/g;

    let match = params.match(pattern);

    let newLetter = "";

    for (let i = 0; i < match.length; i++) {
        if (i == match.length - 1) {
            newLetter += match[i].toUpperCase()
        } else {
            newLetter += `${match[i].toUpperCase()}, `
        }
    }

    console.log(newLetter);
}
wordsUppercase('hello')