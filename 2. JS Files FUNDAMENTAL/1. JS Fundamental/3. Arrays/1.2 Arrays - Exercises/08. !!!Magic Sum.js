function magicSum(arr, sumNumber) {

    let safeArray = [];

    for (let i = 0; i < arr.length; i++) {

        for (let j = i + 1; j < arr.length; j++) {

            let sum = arr[i] + arr[j];

            if (sum == sumNumber) {

                safeArray.push(arr[i], arr[j]);
            }
        }
    }

    for (let k = 0; k < safeArray.length; k += 2) {
        let itsUnique = true;
        
        let uniq = [];
        uniq.push(safeArray[k], safeArray[k + 1]);

        for (let z = k + 2; z < safeArray.length; z += 2) {

            let checkPair = [];
            checkPair.push(safeArray[z], safeArray[z + 1]);

            if (uniq[k,k+1] == checkPair[0,1]){
                itsUnique = false;
                break;
            }

        }
        if(itsUnique){
            console.log(uniq.join(` `));
        }
    }
}

magicSum([14, 20, 14, 60, 13, 7, 19, 8],
    27
)    