function minNumber (input){
    let index = 0;
    let n = input[index];
    index++;

    let lowestNumber = Number.MAX_SAFE_INTEGER
    
    while(n !== "Stop"){
        if (n < lowestNumber){
            lowestNumber = Number(n)
        }
        n = input[index];
        index++
    }

    console.log(lowestNumber);

}
minNumber(["-10",
"20",
"-30",
"Stop"])

