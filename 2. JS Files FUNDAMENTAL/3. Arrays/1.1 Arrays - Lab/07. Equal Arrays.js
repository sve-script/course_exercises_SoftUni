function EqualArrays(arr1, arr2) {

    let sum = 0;

    let finish = true;
    for (let i = 0; i < arr1.length; i++) {

        if (arr1[i] == arr2[i]) {
            sum += Number(arr1[i]);
        } else {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            finish = false;
            break;
        }
    }

    if (finish) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }


}
EqualArrays(['10', '20', '30'], ['10', '20', '30']);
//	Arrays are not identical. Found difference at 2 index
