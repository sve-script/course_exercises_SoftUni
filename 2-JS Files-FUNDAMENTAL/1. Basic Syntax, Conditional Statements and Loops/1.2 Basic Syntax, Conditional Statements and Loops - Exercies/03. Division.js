function division(numb) {

    let division = 0;
    let by2 = false;
    let by3 = false;

    if (numb % 2 == 0) {
        division = 2;
        by2 = true;
    }

    if (numb % 3 === 0) {
        division = 3;
        by3 = true;
    }

    if (by2 && by3) {
        division = 6;
    }

    if (numb % 7 == 0) {
        division = 7;
    }

    if (by2) {
        if (numb % 10 == 0) {
            division = 10;
        }
    }


    if (division == 0) {
        console.log(`Not divisible`);
    } else {
        console.log(`The number is divisible by ${division}`);
    }
}
division(30)