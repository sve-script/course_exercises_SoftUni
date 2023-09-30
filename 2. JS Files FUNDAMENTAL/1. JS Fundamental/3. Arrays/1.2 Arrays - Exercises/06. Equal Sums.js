function EqualSums(arr) {

    let index = null;


    for (let i = 0; i < arr.length; i++) {

        if (arr.length == 1) {
            index = 0;
            break;
        }

        let leftSum = 0;
        let rightSum = 0;

        for (let j = 0; j < i; j++) {
            leftSum += arr[j];
        }
        for (let k = arr.length - 1; k > i; k--) {
            rightSum += arr[k];
            if (rightSum > leftSum) {
                break;
            }
        }

        if (leftSum == rightSum) {
            index = i;
            break;
        }
    }

    console.log(index !== null ? index : "no");

}

EqualSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);


// лявата и дясната страна трябва да са равни. Взимаме даден идекс и проверяваме дали всички числа от ляво и всички числа от дясно на него
// правят еднакъв сбор. Ако да печатаме индекса, ако не печатаме "no";