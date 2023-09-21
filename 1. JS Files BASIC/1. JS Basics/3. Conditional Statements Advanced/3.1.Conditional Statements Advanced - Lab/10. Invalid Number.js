function invalidNumber(input) {
    let number = Number(input[0]);

    if (number >= 100 && number <= 200 || number === 0) {

    } else {
        console.log(`invalid`)
    }

}
invalidNumber(["201"])
















/*Дадено число е валидно, ако е в диапазона [100…200] или е 0. 
Да се напише функция, която приема аргумент  цяло число, и печата "invalid" ако въведеното число не е валидно.  */