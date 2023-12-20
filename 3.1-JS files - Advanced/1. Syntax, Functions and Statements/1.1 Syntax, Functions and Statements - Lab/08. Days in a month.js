function dayInMonth(month, year) {

    let days = new Date(year, month, 0).getDate();

    return days
}
dayInMonth(1, 2012)