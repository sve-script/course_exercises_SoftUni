function tennisEquipment(array) {

    let rocketPrice = Number(array[0]);
    let rocketNumbers = Number(array[1]);

    let seekers = Number(array[2]);
    let oneSeekers = rocketPrice / 6;

    let totalRocketPrice = rocketPrice * rocketNumbers;
    let totalSeekers = oneSeekers * seekers;
    let otherEquipment = (totalRocketPrice + totalSeekers) * 0.2;

    let totalPrice = totalRocketPrice+totalSeekers+otherEquipment;

    let DjokovicPrice = totalPrice / 8;
    let shipments = totalPrice * 7 / 8;


    console.log(`Price to be paid by Djokovic ${Math.floor(DjokovicPrice)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil(shipments)}`);


}

tennisEquipment([386, 7, 4])