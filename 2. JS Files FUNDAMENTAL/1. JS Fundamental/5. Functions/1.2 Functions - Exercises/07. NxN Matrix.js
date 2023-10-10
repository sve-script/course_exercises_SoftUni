function nxnMatrix(n) {

    for (let i = 0; i < n; i++) {

        let printValue = "";

        for (let j = 0; j < n; j++) {
            printValue += `${n} `
        }
        console.log(printValue);
    }
}

nxnMatrix(7)