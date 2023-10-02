function rotateArray(arr){

    let lastArrElement = arr.pop();

    for (let i = 0; i < lastArrElement; i++){

        arr.unshift(arr[arr.length-1]);
        arr.pop();
    }

    console.log(arr.join(` `));
    debugger

}

rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15'])