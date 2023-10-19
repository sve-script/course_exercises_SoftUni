function cake(input) {
    let index = 0;
    let length = input[index];
    index++
    let width = input[index];
    index++

    let fullSize = length * width

    let piece = input[index];
    index++

    let totalPeace = 0;

    while (piece !== "STOP") {
        if (totalPeace > fullSize) {
            console.log(`No more cake left! You need ${totalPeace - fullSize} pieces more.`);
            break;
        }
        if (totalPeace == fullSize){
            console.log(`${fullSize - totalPeace} pieces are left`);
            break;
        }
        totalPeace += Number(piece);
        piece = input[index];
        index++
    }

    if (piece === "STOP") {
        console.log(`${fullSize - totalPeace} pieces are left.`);
    }

}

cake(["10",
    "10",
    "20",
    "20",
    "20",
    "20",
    "19",
    ])


