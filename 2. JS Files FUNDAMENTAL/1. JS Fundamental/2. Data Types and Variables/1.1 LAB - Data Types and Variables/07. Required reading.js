function requiredReading(pages, pagesPerOneHour, days) {

    let totalTimeReading = pages/ pagesPerOneHour;
    let requiredHours = totalTimeReading/days

    console.log(requiredHours);

}
requiredReading(212, 20 ,2);