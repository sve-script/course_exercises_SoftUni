function maxNumber (input){
    let index = 0;
    let n = input[index];
    index++;

    let biggestNumber = Number.MIN_SAFE_INTEGER
    
    while(n !== "Stop"){
        if (n > biggestNumber){
            biggestNumber = Number(n)
        }
        n = input[index];
        index++
    }

    console.log(biggestNumber);

}
maxNumber(["-1",
"-2",
"Stop"])


