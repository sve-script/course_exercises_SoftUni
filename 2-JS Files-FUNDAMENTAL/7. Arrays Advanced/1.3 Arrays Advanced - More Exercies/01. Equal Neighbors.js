function equalNeighbors(matrix) {

    let neighbors = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {

            if (j < matrix[i].length - 1) {
                if (matrix[i][j] == matrix[i][j + 1]) {
                    neighbors++
                }
            }
            if (i < matrix.length - 1) {
                if (matrix[i][j] == matrix[i + 1][j]) {
                    neighbors++
                }
            }
        }
    }

    return neighbors
}

equalNeighbors([['test', 'yo', 'yo', 'ho'],
['well', 'done', 'no', '6'],
['not', 'done', 'yet', '5']])




