function worldTour(string) {


    let match = /(=|\/)[A-Z][A-Za-z]{2,}\1/g;

    let cityValidation = /\w+/g;

    let places = string.match(match);

    if (places) {

        let printValue = places.join(``).match(cityValidation);

        console.log(`Destinations: ${printValue.join(`, `)}`);
        console.log(`Travel Points: ${printValue.join(``).length}`);

    } else {
        console.log(`Destinations:`);
        console.log(`Travel Points: 0`);
    }


}
worldTour("ThisIs some InvalidInput")