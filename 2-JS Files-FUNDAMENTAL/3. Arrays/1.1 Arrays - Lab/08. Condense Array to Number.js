function condenseArrayToNumbers(arr) {
    let newArr = [];

    while (arr.length > 1) {
        
        for (let i = 0; i < arr.length - 1; i++) {

            newArr.push(arr[i] + arr[i + 1]); // 5
        }
        arr = newArr
        newArr = [];
    }
    console.log(arr.join(``));

}

condenseArrayToNumbers([5, 0, 4, 1, 2]);


// trqbwa da smetnem 0+1; 1+2;2+3 i t.n;
// da zapazim novite stojnosti v nov masiv i da smetnem i nego;
// novite promenlivi trqbva da gi zapazim v pyrviq masiv.. i t.n;

// [5,0,4,1,2]	35	5 0 4 1 2  5+0 0+4 4+1 1+2  5 4 5 3  5+4 4+5 5+3  9 9 8  9+9 9+8  18 17  18+17  35