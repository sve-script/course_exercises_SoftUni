function nextDay (year, month, day){

    let date = new Date();

    let newYear = date.setYear()

    let newMonth = date.setMonth(day)

    console.log(newMonth);
    // console.log(currentDay);
    // console.log(currentMonth);

}
nextDay(2016, 9, 30)