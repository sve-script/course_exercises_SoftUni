function sumFirstAndLast(arr) {

    let newArr = arr.map(Number);
    let poped = newArr.pop();
    let shifted = newArr.shift();

    console.log(poped + shifted);

}

sumFirstAndLast(['20', '30', '40'])