function house(input) {

    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);

    let greenPaint = 3.4;
    let redPaint = 4.3;

    let walls = ((Math.pow(x, 2) * 2) - (1.2 * 2) + ((x * y) * 2) - (Math.pow(1.5, 2) * 2)) / greenPaint
    let ceiling = (x * y * 2 + x * h) / redPaint

    
    console.log(walls.toFixed(2));
    console.log(ceiling.toFixed(2));

}