function matchdates([arr]) {

    let pattern = /\d{2}([\/ -\.])[A-Z][a-z]{2}\1\d{4}\b/g;

    //console.log(arr.match(pattern));

    for (let el of arr.match(pattern)) {
        let day;
        let month;
        let year;
        if (el[2] == "/") {
            [day, month, year] = el.split("/")
        } else if (el[2] == "-") {
            [day, month, year] = el.split("-")
        } else {
            [day, month, year] = el.split(".")
        }

        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    }

}
matchdates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016'])