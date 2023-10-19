function sequence2kPlus1(input) {
    let index = 0;

    let n = Number(input[index]);
    index++

    let startingNumbers = 1;


    while (startingNumbers <= n) {
        console.log(startingNumbers);
        startingNumbers = startingNumbers * 2 + 1


    }


}
sequence2kPlus1(["31"])