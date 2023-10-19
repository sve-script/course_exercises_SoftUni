function numbersDivisibleBy9(input) {
    let numbOne = Number(input[0]); //100
    let numbTwo = Number(input[1]); //200

    let sum = 0
    let n = 0

    for (let i = numbOne; i <= numbTwo; i++) {
        if (i % 9 === 0) {
            sum += i // sum = sum + i 
            n = i

            //console.log(i);
        }
    }
    console.log(`The sum: ${sum}`)

    for (let i = numbOne; i <= numbTwo; i++) {
        if (i % 9 === 0) {
            console.log(i)
        }
    }
}
numbersDivisibleBy9(["100", "200"])

/*Напишете функция, която получава две числа и принтира  на конзолата, всички числа в диапазона, които се делят на 9 без остатък, 
както и тяхната сума.  На първия ред отпечатайте сумата на числата, а на следващите редове отговарящите на условието числа. */




