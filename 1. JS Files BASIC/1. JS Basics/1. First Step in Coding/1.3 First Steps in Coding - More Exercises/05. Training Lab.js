function trainingLab(input) {
    let w = Number(input[0]) * 100;
    let h = Number(input[1]) * 100;

    let tableWidth = Math.floor((h - 100) / 70)
    let tableLength = Math.floor(w / 120)

    let totalSeatedPlaces = tableWidth * tableLength
    console.log(totalSeatedPlaces - 3);

}
trainingLab([8.4, 5.2])