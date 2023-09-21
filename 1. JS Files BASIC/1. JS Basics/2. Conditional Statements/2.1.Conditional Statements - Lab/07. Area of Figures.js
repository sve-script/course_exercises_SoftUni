function areaOfFigures(input) {

    let figure = input[0];
    let a = Number(input[1]);
    let b = Number(input[2]);

    if (figure === "square") {
        total = a * a
    } else if (figure === "rectangle") {
        total = a * b
    } else if (figure === "circle") {
        total = Math.pow(a, 2) * Math.PI
    } else if (figure === "triangle") {
        total = (a * b) / 2
    }
    console.log(total.toFixed(3));

}

areaOfFigures(["circle", "6", "20"])