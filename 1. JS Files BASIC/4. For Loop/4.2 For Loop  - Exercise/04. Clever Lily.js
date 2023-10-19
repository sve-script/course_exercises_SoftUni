function cleverLily(input) {
    let age = Number(input[0]);
    let washingMachine = Number(input[1]);
    let toyPrice = Number(input[2]);

    let oddCount = 0; 
    let evenCount = 0;
    let sum = 0;

    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            evenCount++
            sum += 10 * evenCount - 1
        } else {
            oddCount++
        }
    }

    let totalSum = (oddCount * toyPrice) + sum

    if (totalSum >= washingMachine){
        console.log(`Yes! ${(totalSum - washingMachine).toFixed(2)}`)
    } else {
        console.log(`No! ${Math.abs(totalSum-washingMachine).toFixed(2)}`);
    }

}

cleverLily([21,
1570.98,
3])



/*  Лили вече е на N години. За всеки свой рожден ден тя получава подарък. 
•	За нечетните рождени дни (1, 3, 5...n) получава играчки.
•	За четните рождени дни (2, 4, 6...n) получава пари. 
За втория рожден ден получава 10.00 лв, като сумата се увеличава с 10.00 лв., 
за всеки следващ четен рожден ден (2 -> 10, 4 -> 20, 6 -> 30...и т.н.). 
През годините Лили тайно е спестявала парите. Братът на Лили, 
в годините, които тя получава пари, взима по 1.00 лев от тях.
 Лили продала играчките получени през годините, всяка за P лева и добавила сумата към спестените пари. 
 С парите искала да си купи пералня за X лева. Напишете програма, 
 която да пресмята, колко пари е събрала и дали ѝ стигат да си купи пералня.
 */