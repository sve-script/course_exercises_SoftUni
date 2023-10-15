function bombNumbers(array, specialBombNumber) {

    let specialNumber = specialBombNumber.shift();
    let bombPower = specialBombNumber.pop();


    for (let i = 0; i < array.length; i++) {
        if (array[i] == specialNumber) {
            if (i <= bombPower) {
                array.splice(0, (bombPower * 2 + 1))
            } else {
                array.splice(i - bombPower, (bombPower * 2 + 1))

            }
            i = -1
        }
    }
    let sum = 0;
    for (let n of array) {
        sum += n
    }

    console.log(sum);
}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]






)
