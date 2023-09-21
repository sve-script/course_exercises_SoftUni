function cinemaTickets(input) {

    let index = 0;
    let command = input[index];
    index++

    let totalTicket = 0;
    let totalStandard = 0;
    let totalStudents = 0;
    let totalKid = 0;

    while (command !== "Finish") {
        let filmName = command;

        let freeSpace = Number(input[index]);
        index++
        let ticketType = input[index];
        index++

        let count = 0;

        while (ticketType !== "End") {
            totalTicket++
            count++

            switch (ticketType) {
                case "standard":
                    totalStandard++
                    break;
                case "student":
                    totalStudents++
                    break;
                case "kid":
                    totalKid++
                    break;
            }

            if (count == freeSpace){
                break;
            }

            ticketType = input[index];
            index++
            
        }

        console.log(`${filmName} - ${(count * 100 / freeSpace).toFixed(2)}% full.`);

        command = input[index];
        index++
    }

    console.log(`Total tickets: ${totalTicket}`);
    console.log(`${(totalStudents * 100 / totalTicket).toFixed(2)}% student tickets.`);
    console.log(`${(totalStandard * 100 / totalTicket).toFixed(2)}% standard tickets.`);
    console.log(`${(totalKid * 100 / totalTicket).toFixed(2)}% kids tickets.`);

}
cinemaTickets(["Taxi","10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"])
