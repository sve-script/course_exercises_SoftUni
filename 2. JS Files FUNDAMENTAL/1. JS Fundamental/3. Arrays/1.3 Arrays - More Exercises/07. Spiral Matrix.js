function spiralMatrix(x, y) {

    for (let i = 0; i < x; i++) {
        let row = []
        for (let k = 1; k <= y; k++) {
            row.push(k)
        }
        console.log(row);
    }

}

spiralMatrix(5, 5)