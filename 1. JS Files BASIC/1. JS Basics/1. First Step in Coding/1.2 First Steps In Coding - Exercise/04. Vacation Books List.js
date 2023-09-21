function vacationBooksList(input) {

    let numbPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let days = Number(input[2]);

    let time = numbPages / pagesPerHour
    let totalHoursPerDay = time / days

    console.log(totalHoursPerDay);
}

vacationBooksList([`212`,`20`,`2`])