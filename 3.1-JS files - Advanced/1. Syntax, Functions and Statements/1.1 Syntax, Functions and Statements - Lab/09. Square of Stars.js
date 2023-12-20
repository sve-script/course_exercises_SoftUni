function squareOfStars(params = 5) {

    for (let i = 0; i < params; i++) {

        let printValue = "";

        for (let j = 0; j < params; j++) {
            printValue += "* ";
        }
        console.log(printValue);
    }
}
squareOfStars()