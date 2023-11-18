function travelTime(array) {

    let holidayVisit = {};


    for (let el of array) {

        let [country, city, price] = el.split(` > `);

        if (!holidayVisit.hasOwnProperty(country)) {
            holidayVisit[country] = { [city]: price };
        } else {
            if (holidayVisit[country].hasOwnProperty(city)) {
                let currentCityPrice = holidayVisit[country][city];
                if (currentCityPrice > price) {
                    holidayVisit[country][city] = price
                } else {
                    continue;
                }
            }
            holidayVisit[country][city] = price
        }
    }
    console.log(holidayVisit);
}
travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]
)