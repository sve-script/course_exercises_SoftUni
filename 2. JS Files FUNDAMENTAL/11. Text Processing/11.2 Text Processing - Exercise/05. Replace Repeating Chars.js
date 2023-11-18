function replaceRepeatingChars(text) {

    let clearWord = "";
    let previousChar = "";

    for (let char of text) {
        if (char !== previousChar) {
            clearWord += char;
            previousChar = char;
        }
    }

    console.log(clearWord);


}

replaceRepeatingChars("aaaaabbbbbcdddeeeedssaa")