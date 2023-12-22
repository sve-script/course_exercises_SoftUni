function previousDay(year, month, day) {

    const date = new Date(year, month, day - 1);
    console.log(`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`);
}
previousDay(2016, 3, 1)