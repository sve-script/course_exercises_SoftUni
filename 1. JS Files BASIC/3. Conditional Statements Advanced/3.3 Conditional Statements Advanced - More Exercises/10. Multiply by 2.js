function multiplyBy2(input){

    for(let index = 0; index < input.length; index++){
        let result = 2 * input[index]
            if(result>=0){
                console.log(`Result: ${result.toFixed(2)}`);
            } else {
                console.log(`Negative number!`);
            }
    }
}
multiplyBy2([12,43.2144,12.3,543.23,-20])