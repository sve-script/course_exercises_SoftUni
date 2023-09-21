function grades(input) {
    let index = 0;
    let students = Number(input[index]);
    index++

    let totalExamGrade = 0;
    let betweenTwoAndTri = 0;
    let betweenTriAndFour = 0;
    let betweenFourAndFive = 0;
    let excellent = 0;

    for (let i = 1; i < input.length; i++) {
        let examGrade = Number(input[i]);
        totalExamGrade += Number(input[i]);
        if (examGrade <= 2.99) {
            betweenTwoAndTri++
        } else if (examGrade >= 3.00 && examGrade <= 3.99) {
            betweenTriAndFour++
        } else if (examGrade >= 4.00 && examGrade <= 4.99) {
            betweenFourAndFive++
        } else {
            excellent++
        }
    }

    let avgGrade = totalExamGrade / students
    console.log(`Top students: ${(excellent / students * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${(betweenFourAndFive / students * 100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${(betweenTriAndFour / students * 100).toFixed(2)}%`);
    console.log(`Fail: ${((betweenTwoAndTri) / students * 100).toFixed(2)}%`);
    console.log(`Average: ${avgGrade.toFixed(2)}`);

}

grades([6, 2, 3, 4, 5, 6, 2.2])