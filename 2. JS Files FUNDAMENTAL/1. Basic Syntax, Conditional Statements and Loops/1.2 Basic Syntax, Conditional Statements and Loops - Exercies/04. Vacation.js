function vacation(group, type, day) {

    let payPerPerson = 0;

    switch (day) {
        case "Friday":
            switch (type) {
                case "Students": payPerPerson = 8.45;
                    break;
                case "Business": payPerPerson = 10.90;
                    break;
                case "Regular": payPerPerson = 15;
                    break;
            }
            break;
        case "Saturday":
            switch (type) {
                case "Students": payPerPerson = 9.80;
                    break;
                case "Business": payPerPerson = 15.60;
                    break;
                case "Regular": payPerPerson = 20;
                    break;
            }
            break;
        case "Sunday":
            switch (type) {
                case "Students": payPerPerson = 10.46;
                    break;
                case "Business": payPerPerson = 16;
                    break;
                case "Regular": payPerPerson = 22.50;
                    break;
            }
            break;
    }

    let totalPrice = group * payPerPerson;

    if (type == "Students" && group >= 30) {
        totalPrice *= 0.85;
    }

    if (type == "Business" && group >= 100) {
        totalPrice -= payPerPerson * 10;
    }
    if (type == "Regular" && group >= 10 && group <= 20) {
        totalPrice *= 0.95;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
vacation(40,
    "Regular",
    "Saturday"
)