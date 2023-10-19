function guineaPig(array) {

    array.map(Number);

    let food = array[0];
    let hay = array[1];
    let cover = array[2];
    let pigWeigh = array[3];

    for (let i = 1; i <= 30; i++) {
        food -= 0.30;
        if (i % 2 == 0) {
            hay -= food * 0.05;
        }
        if (i % 3 == 0) {
            cover -= pigWeigh / 3
        }
    }

    if (food >= 0 && hay >= 0 && cover >= 0) {
        console.log(`Everything is fine! Puppy is happy! Food: ${food.toFixed(2)}, Hay: ${hay.toFixed(2)}, Cover: ${cover.toFixed(2)}.`);
    } else {
        console.log(`Merry must go to the pet store!`);
    }
}

guineaPig(((["9",

    "5",

    "5.2",

    "1"

])))