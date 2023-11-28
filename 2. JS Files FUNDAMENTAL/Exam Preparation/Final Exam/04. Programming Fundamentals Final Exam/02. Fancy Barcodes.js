function fancyBarcodes(input) {

    let barcodeGiven = input.shift();

    let match = /@#+[A-Z][A-Za-z\d]{4,}[A-Z]@#+/;

    let digitCheck = /\d/g;

    while (input.length > 0) {
        barcode = input.shift();

        let check = barcode.match(match)
        if (check) {

            let digit = check[0].match(digitCheck);

            if (digit) {
                console.log(`Product group: ${digit.join(``)}`);
            } else {
                console.log(`Product group: 00`);
            }
        } else {
            console.log(`Invalid barcode`);
        }
    }
}
fancyBarcodes(["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"])

