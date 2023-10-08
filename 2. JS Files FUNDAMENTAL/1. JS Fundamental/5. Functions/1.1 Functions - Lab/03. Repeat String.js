function repeatString(string, repeatingNumber) {

    let result = string.repeat(repeatingNumber)
    console.log(result);
}

repeatString("abc", 3)

//solution 2---------------------------------
function repeatStr(str, repeat) {

    function cycle(string, rep) {
        let value = "";
        for (let i = 0; i < rep; i++) {
            value += string
        }
        return value;
    }

    let resultFromCycle = cycle(str, repeat);

    function logo(cons) {
        console.log(cons)
    }
    logo(resultFromCycle)

}

repeatStr("abc", 3)