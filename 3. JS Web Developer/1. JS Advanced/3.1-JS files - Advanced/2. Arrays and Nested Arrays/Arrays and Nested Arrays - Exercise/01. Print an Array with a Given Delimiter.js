const printAnArrayWithAGivenDelimiter = (array, symbol) => {

    console.log(array.join(symbol));
}
printAnArrayWithAGivenDelimiter(
    ['One',
        'Two',
        'Three',
        'Four',
        'Five'],
    '-'
)