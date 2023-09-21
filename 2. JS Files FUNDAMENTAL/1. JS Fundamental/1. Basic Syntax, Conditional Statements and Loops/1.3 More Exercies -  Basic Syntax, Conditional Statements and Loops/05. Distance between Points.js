function distanceBetweenPoints(x1, y1, x2, y2) {

    let x = Math.pow(x1 - x2, 2);
    let y = Math.pow(y1 - y2, 2);

    let printValue = Math.sqrt(x + y);
    console.log(printValue);
}

distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985)