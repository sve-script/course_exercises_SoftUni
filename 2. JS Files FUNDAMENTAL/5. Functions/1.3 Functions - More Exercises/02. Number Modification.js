function numberModification(inputNumber) {

    function checkNumber(n) {

        let check = n.toString();
        let arrOfNumbs = [];

        for (let i of check) {
            arrOfNumbs.push(i)
        }

        return arrOfNumbs
    }

    function addNumber(arr) {

        let sumOfNumb = 0;
        let array = checkNumber(inputNumber);

        for (let sum of array) {
            sumOfNumb += Number(sum);
        }

        if (sumOfNumb / array.length >= 5) {
            return array.join(``);
        } else {
            while (sumOfNumb / array.length < 5) {
                sumOfNumb += 9
                array.push(9);
            }
        }

        return array.join(``)

    }

    addNumber(inputNumber)


    console.log(addNumber(inputNumber));
}
numberModification(5835)



//1. превръщаме числото в масив
//2. смятаме сбора на масива и проверяваме дали средната стойност не е повече от 5