function
    myFunction
    (
        a, b
    ) {
    let count = 0;
    return b.forEach(x)=> {
        if (x === b) {
            count++
        }
    }
    return count
}

myFunction('m', 'how many times does the character occur in this sentence?')