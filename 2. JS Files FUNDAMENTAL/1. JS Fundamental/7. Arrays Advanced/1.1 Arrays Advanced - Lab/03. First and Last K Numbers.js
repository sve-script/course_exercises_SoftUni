function firstAndLastKNumbers(array) {

    let k = array.shift();

    let firstElements = array.slice(0, k).join(` `);
    let lastElements = array.slice(array.length - k).join(` `)

    console.log(firstElements);
    console.log(lastElements);
}
firstAndLastKNumbers([3,
    6, 7, 8, 9, 10, 11]
)
//  0, 1, 2, 3, 4, 5