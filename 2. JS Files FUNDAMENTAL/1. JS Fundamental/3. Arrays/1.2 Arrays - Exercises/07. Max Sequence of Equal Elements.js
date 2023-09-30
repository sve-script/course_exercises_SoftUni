function maxSequenceOfEqualElements(arr) {

    let currentArr = [];
    let longestArr = [];

    for (let i = 0; i < arr.length; i++) {


        if (arr[i] == arr[i + 1]) {
            if (currentArr.length == 0) {
                currentArr.push(arr[i], arr[i + 1])
            } else {
                currentArr.push(arr[i])
            }

        } else {
            
            if (currentArr.length > longestArr.length) {
                longestArr = currentArr;
  
            }
            currentArr = [];
        }
    }

    console.log(longestArr.join(` `));
}

maxSequenceOfEqualElements([2, 1, 1, 1, 2, 3, 3, 2, 2, 2, 2, 1])
//  0, 1, 2, 3, 4, 5, 6, 7, 8, 9