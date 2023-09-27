function reverseString (string){

    let inputString = string.toString();

    let splitString = inputString.split(``);
    let reverseString = splitString.reverse();
    let reverseValue = reverseString.join(``);

    console.log(reverseValue);

}
reverseString(`Hello`)