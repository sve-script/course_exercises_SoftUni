function validityChecker(x1, x2, y1, y2) {

    function calculateDistance(x1, y1, x2, y2) {
        console.log(Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2)));
        return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));

    }

    const distance1ToOrigin = calculateDistance(x1, y1, 0, 0);
    const distance2ToOrigin = calculateDistance(x2, y2, 0, 0);
    const distance1To2 = calculateDistance(x1, y1, x2, y2);

    if (Number.isInteger(distance1ToOrigin)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(distance2ToOrigin)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(distance1To2)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}
validityChecker(3, 0, 0, 1)
