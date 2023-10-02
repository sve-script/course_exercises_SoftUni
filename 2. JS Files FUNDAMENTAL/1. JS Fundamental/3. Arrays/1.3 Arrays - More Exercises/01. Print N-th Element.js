function printNElement(arr){

    let lastElement = arr[arr.length-1];

    let printValue = []

    for (let i = 0; i < arr.length-1; i+=Number(lastElement)){
        printValue.push(arr[i])
    }
debugger
    console.log(printValue.join(` `));
}
printNElement(['5', '20', '31', '4', '20', '2'])