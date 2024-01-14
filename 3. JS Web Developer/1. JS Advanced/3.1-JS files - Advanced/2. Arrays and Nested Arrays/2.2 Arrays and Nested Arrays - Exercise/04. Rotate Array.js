function rotateArray(params, n) {

    for (let i = 0; i < n; i++) {
        params.unshift(params.pop())
    }
    console.log(params.join(` `));
}
rotateArray(['Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15

)