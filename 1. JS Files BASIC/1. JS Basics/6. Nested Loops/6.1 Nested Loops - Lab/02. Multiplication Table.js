function multiplicationTable() {

    for (x = 1; x <= 10; x++) {
        for (y = 1; y <= 10; y++) {
            let result = x * y
            console.log(`${x} * ${y} = ${result}`);
        }
    }
}
multiplicationTable()