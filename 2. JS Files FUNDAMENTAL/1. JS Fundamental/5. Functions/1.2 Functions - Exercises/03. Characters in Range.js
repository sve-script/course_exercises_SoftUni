function charactersInRange(symbol1, symbol2) {

    let firstSymbolNumb = symbol1.charCodeAt();
    let secondSymbolNumb = symbol2.charCodeAt();

    let startingPoint = 0;
    let endingPoint = 0;

    startingPoint = Math.min(firstSymbolNumb, secondSymbolNumb)
    endingPoint = Math.max(firstSymbolNumb, secondSymbolNumb)

    function cycle(a, b) {
        let printValue = "";
        for (let i = a + 1; i < b; i++) {
            printValue += `${String.fromCharCode(i)} `;
        }
        return printValue;
    }
    cycle(startingPoint, endingPoint)


    console.log(cycle(startingPoint, endingPoint));
}
charactersInRange('C',
    '#'

)