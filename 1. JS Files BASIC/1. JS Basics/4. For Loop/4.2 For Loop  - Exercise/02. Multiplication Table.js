function multiplicationTable(input) {

    let n = Number(input[0]);

    for (let i = 1; i <= 10; i++) {
        let result = i * n
        console.log(`${i} * ${n} = ${result}`);
    }
}
multiplicationTable(["10"])







/*Напишете функция, която получава аргумент число от 1 до 10 и принтира таблицата за умножение в конзолата.  */