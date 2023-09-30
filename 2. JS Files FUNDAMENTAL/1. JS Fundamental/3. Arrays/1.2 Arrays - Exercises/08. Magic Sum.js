function magicSum(arr, sumNumber) {

    for (let i = 0; i < arr.length; i++) {

        let printValue = [];

        for (let j = i + 1; j < arr.length; j++) {

            let sum = arr[i] + arr[j];

            if (sum == sumNumber) {
                
                printValue.push(arr[i],arr[j])
            }
        }
        if(printValue.length > 0){
            //TODO checking same not unique values;
            console.log(printValue.join(` `));
        }
    }
}

magicSum([14, 20, 14, 60, 13, 7, 19, 8],
    27
)    