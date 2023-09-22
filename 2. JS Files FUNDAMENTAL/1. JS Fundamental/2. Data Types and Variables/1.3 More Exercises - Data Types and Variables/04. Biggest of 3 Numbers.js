function biggestOf3Numbers (numb1,numb2,numb3){

    let startingNumber = Number.MIN_SAFE_INTEGER;

    if (numb1 > startingNumber){
        startingNumber = numb1;
    }
    if (numb2 > startingNumber){
        startingNumber = numb2
    }
    if(numb3 > startingNumber){
        startingNumber = numb3
    }

    console.log(startingNumber);

}
biggestOf3Numbers(-2,7,3)