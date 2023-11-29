function echoType (input){

    let printValue = typeof input;

    console.log(printValue);

    if(printValue == 'number' || printValue == 'string'){
        console.log(input);
    }else {
        console.log(`Parameter is not suitable for printing`);
    }
}

echoType('Hello, JavaScript!')