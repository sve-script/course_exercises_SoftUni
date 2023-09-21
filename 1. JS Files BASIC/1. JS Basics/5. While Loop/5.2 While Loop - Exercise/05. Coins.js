function coins(input) {
    let index = 0;
    let instead = Number(input[index]);
    index++

    let coins = instead * 100;
    let result = 0;


    while (1 <= coins) {
        if (coins >= 200) {
            coins -= 200;
        } else if (coins >= 100) {
            coins -= 100;
        } else if (coins >= 50) {
            coins -= 50;
        } else if (coins >= 20) {
            coins -= 20;
        } else if (coins >= 10) {
            coins -= 10;
        } else if (coins >= 5) {
            coins -= 5;
        } else if (coins >= 2) {
            coins -= 2;
        } else {
            coins -= 1;
        }

        result++

        if (coins === 0) {
            break;
        }

    }

    console.log(result);

}
coins(["100.32"])