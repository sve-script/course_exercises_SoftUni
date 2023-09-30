function condenseArrayToNumbers(arr) {

    if (arr.length > 1) {

        let newArr = [];
        let comArr = [];

        for (i = 0; i < arr.length - 1; i++) {

            newArr[i] = arr[i] + arr[i + 1];
            comArr[i] = newArr[i];
        }
        console.log(comArr);
    } else {
        console.log(comArr);
    }
}

condenseArrayToNumbers([5, 0, 4, 1, 2]);


// trqbwa da smetnem 0+1; 1+2;2+3 i t.n;
// da zapazim novite stojnosti v nov masiv i da smetnem i nego;
// novite promenlivi trqbva da gi zapazim v pyrviq masiv.. i t.n;