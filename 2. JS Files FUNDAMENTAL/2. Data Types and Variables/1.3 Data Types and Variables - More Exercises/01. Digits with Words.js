function digitsWithWords(string) {

    let numb = 0;

    switch (string) {
        case "zero": numb = 0;
            break;
        case "one": numb = 1;
            break;
        case "two": numb = 2;
            break;
        case "three": numb = 3;
            break;
        case "four": numb = 4;
            break;
        case "five": numb = 5;
            break;
        case "six": numb = 6;
            break;
        case "seven": numb = 7;
            break;
        case "eight": numb = 8;
            break;
        case "nine": numb = 9;
    }

console.log(numb);

}
digitsWithWords('nine')