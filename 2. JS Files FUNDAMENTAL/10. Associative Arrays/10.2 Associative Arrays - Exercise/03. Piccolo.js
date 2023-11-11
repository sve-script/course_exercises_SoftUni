function piccolo(array) {

    let currentCars = new Set();

    for (let command of array) {
        let [direction, number] = command.split(", ");
        if (direction == 'IN') {
            currentCars.add(number);
        } else {
            currentCars.delete(number)
        }
    }

    if (currentCars.size == 0) {
        return "Parking Lot is Empty";
    }

    let sortedParking = Array.from(currentCars).sort().map(x => console.log(x))
}
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
)