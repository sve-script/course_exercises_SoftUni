function sortNumbers (n1,n2,n3){

    let biggestNumber = 0;
    let middleNumber = 0;
    let lowerNumber = 0;

    if (n1 > n2){
        biggestNumber = n1;
        lowerNumber = n2; 
    }else {
        biggestNumber = n2;
        lowerNumber = n1;
    }

    if (n3 > biggestNumber){
        middleNumber = biggestNumber;
        biggestNumber = n3;
    }else if (n3 > lowerNumber){
        middleNumber = n3;
        
    } else {
        middleNumber = lowerNumber;
        lowerNumber = n3;
        
    }

    console.log(biggestNumber);
    console.log(middleNumber);
    console.log(lowerNumber);
}

sortNumbers(10
    ,10
    ,10)