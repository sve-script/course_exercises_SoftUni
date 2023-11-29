function reverseAnArrayOfNumbers (n, input){

    let array = [];

    for (let i = n - 1; i >= 0; i--){
        array += `${input[i]} `;

    }

    console.log(array);
}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50])