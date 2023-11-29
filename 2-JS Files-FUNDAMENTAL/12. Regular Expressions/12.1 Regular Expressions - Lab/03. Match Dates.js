function matchDates([arr]) {

    let pattern = /(?<day>\d{2})([-\/.])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;

    let match = pattern.exec(arr);

    while (match !== null) {

        let { day, month, year } = match.groups
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);

        match = pattern.exec(arr);
    }
}
matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016'])
// РЕШЕНИЕ С ГРУПИ в РЕГЕКС




// СЛАБО РЕШЕНИЕ БЕЗ ГРУПИ И БЕЗ .exec.... Но пък решение

// function matchdates([arr]) {

//     let pattern = /\d{2}([\/ -\.])[A-Z][a-z]{2}\1\d{4}\b/g;

//     //console.log(arr.match(pattern));

//     for (let el of arr.match(pattern)) {
//         let day;
//         let month;
//         let year;
//         if (el[2] == "/") {
//             [day, month, year] = el.split("/")
//         } else if (el[2] == "-") {
//             [day, month, year] = el.split("-")
//         } else {
//             [day, month, year] = el.split(".")
//         }

//         console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
//     }

// }
// matchdates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016'])