function maxSequenceOfEqualElements(arr) {

    let sequence = [];
    let secondSequence = [];
    let printValue = 0;


    for (let i = 0; i < arr.length - 1; i++) {

        if (arr[i]==arr[i+1]){
            sequence.push(arr[i])
        }
    }
   
    console.log(sequence);

}

maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])