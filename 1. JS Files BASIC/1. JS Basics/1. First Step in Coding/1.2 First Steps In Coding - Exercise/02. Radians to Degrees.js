function radiansToDegrees (input) {

    let radian = Number(input[0]);
    let degree = radian * 180/ Math.PI

    console.log(degree);

}

radiansToDegrees (["3.1416"])