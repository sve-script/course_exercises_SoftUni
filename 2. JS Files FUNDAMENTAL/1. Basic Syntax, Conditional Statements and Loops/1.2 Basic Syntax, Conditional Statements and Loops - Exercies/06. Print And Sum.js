function printAndSum(n, m) {

    let sum = 0;
    let printValue = "";

    for (let i = n; i <= m; i++) {
        printValue += `${i} `;
        sum += i
    }
    console.log(printValue);
    console.log(`Sum: ${sum}`);
}

printAndSum(0, 26)