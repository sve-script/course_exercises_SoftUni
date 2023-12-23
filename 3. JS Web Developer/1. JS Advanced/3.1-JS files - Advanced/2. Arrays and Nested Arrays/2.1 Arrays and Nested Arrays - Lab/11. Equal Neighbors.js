function EqualNeighbors(params) {


    let pairs = 0;

    for (let i = 0; i < params.length; i++) {

        for (let j = 0; j < params[i].length; j++) {

            if (j < params[i].length - 1) {

                if (params[i][j] == params[i][j + 1]) {
                    pairs++
                }
            }

            if (i < params.length - 1) {

                if (params[i][j] == params[i + 1][j]) {
                    pairs++
                }
            }

        }
    }

    return pairs;
}

EqualNeighbors([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]


)