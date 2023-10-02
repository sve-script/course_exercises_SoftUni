function addOrRemove(arr){

    let printArr = [];

    for (let i = 0; i <arr.length; i++){

        switch (arr[i]){
            case "add" : printArr.push(i+1)
            break;
            case "remove" : printArr.pop();
            break;
        }
    }

    console.log(printArr.length > 0 ? printArr.join(` `) : "Empty");
}
addOrRemove(['remove', 'remove', 'remove'])