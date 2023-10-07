function formatGrade(grade) {
    let value = "";

    function print(log) {
        console.log(log);
    }


    if (grade < 3) {
        value = `Fail (2)`
    } else if (grade < 3.50) {
        value = `Poor (${grade.toFixed(2)})`
    } else if (grade < 4.50) {
        value = `Good (${grade.toFixed(2)})`
    } else if (grade < 5.50) {
        value = `Very good (${grade.toFixed(2)})`
    } else {
        value = `Excellent (${grade.toFixed(2)})`
    }

    print(value)


}

formatGrade(5.33)