function sumOfNumbers(input){
    let numbAString = String(input[0]);
    let sum = 0; 
  
    for (let i = 0; i < numbAString.length; i++){
        let ch = +numbAString.charAt(i) // 5135[2]
        //console.log(i);
        sum +=ch
       
    }
       console.log(`The sum of the digits is:` +sum);
}

sumOfNumbers([`2354`])
