function negativeOrPositiveNumbers(arr) {

    let newArr = [];

    for (let char of arr) {

        if (char < 0) {
            newArr.unshift(char);
        } else {
            newArr.push(char);
        }
    }

    console.log(newArr.join(`\n`));
}

negativeOrPositiveNumbers(['7', '-2', '8', '9'])
