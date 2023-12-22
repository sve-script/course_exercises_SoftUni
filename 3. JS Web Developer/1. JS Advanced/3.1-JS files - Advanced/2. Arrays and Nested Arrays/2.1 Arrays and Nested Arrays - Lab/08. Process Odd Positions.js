// function proccessOddPositions(params) {

//     let newArr = [];

//     for (let i = 1; i < params.length; i += 2) {
//         newArr.push(params[i] * 2);
//     }

//     return newArr.reverse().join(` `)

// }
// console.log(proccessOddPositions([3, 0, 10, 4, 7, 3]));


function proccessOddPositions(params) {

    // i във филтър е index. Филтър може да приема, елемента (х), и индекс (i). В случаят сме филтрирали по индекса да е нечетен.

    return params
        .filter((x, i) => i % 2 == 1)
        .map(x => x * 2)
        .reverse()
        .join(` `);

}
proccessOddPositions([3, 0, 10, 4, 7, 3]);