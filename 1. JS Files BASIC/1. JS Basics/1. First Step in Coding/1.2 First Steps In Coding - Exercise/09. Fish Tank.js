function fishTank(input) {

    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]) / 100;

    let volume = length * width * height
    let liters = volume / 1000

    let needLiters = liters * (1-percent);

    console.log(needLiters);
}

fishTank(["85 ", "75 ", "47 ", "17 "])