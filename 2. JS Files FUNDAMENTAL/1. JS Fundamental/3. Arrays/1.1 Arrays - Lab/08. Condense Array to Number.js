function condenseArrayToNumbers(arr) {

    let numAsString = "";
    let sum = 0;

    for (let i = 0; i < arr.length - 1; i++) {

        numAsString += arr[i] + arr[i + 1];

    }

    for(let j = 0; j < numAsString.length- 1; j++){
        
        sum += Number(numAsString[j]) + Number(numAsString[j+1])
    }
    
    console.log(numAsString);
    console.log(sum);
}

condenseArrayToNumbers([5,0,4,1,2])