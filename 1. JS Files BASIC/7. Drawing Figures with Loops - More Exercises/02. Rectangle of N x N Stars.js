function solve (input){

    let n = Number(input[0]);

    for (let i = 0; i < n; i++){
        let symbol = ""
        for (let y = 0; y < n; y++){
            symbol += "*";
        }
        console.log(symbol);
    }
}
solve(["3"])