function reverseInPlace(array) {

    let inputLength = Math.floor(array.length / 2);

    let lengthArray = array.length - 1;

    for (let i = 0; i < inputLength; i++) {

        [array[i], array[lengthArray]] = [array[lengthArray], array[i]];
        lengthArray--;

    }
    console.log(array.join(` `));
}

reverseInPlace(['a', 'b', 'c', 'd', 'e', `f`])