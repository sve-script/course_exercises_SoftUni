function aggregateElements(params) {


    console.log(params.reduce((acc, value) => acc + value));
    let result = 0;
    params.forEach(element => {
        result += 1 / element
    });
    console.log(result);
    console.log(params.join(``));
}
aggregateElements([1, 2, 3])