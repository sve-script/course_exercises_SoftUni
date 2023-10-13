function processOddNumbers(array) {

    let result =
        array
            .filter((x, i) => (i % 2) !== 0) // filter x-element, i- index => funkciq( i % 2 !==0)
            .map(y => y * 2) // funkciq za map koqto proverqva vseki index i go umnojava po 2
            .reverse() // обръща масива на обратно.
            .join(` `) // съединява масива в стринг и слага интервал между всеки индекс

    console.log(result);
}

processOddNumbers([10, 15, 20, 25])

//
// •	Counting in arrays starts from 0
// •	For example –we receive 10, 15, 20, 25
// •	The elements at odd positions are 15 (index 1) and 25 (index 3)
// •	We need to take these two elements and multiply them * 2
// •	Finally, we print them on the console in reversed order
