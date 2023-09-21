function SuppliesForSchool(input) {

    let pen = Number(input[0]) * 5.8;
    let marker = Number(input[1]) * 7.2;
    let cleaningDetergent = Number(input[2]) * 1.2;
    let totalPrice = pen + marker + cleaningDetergent
    let priceDiscount = totalPrice - (totalPrice * 0.25)

    console.log(priceDiscount);



}

SuppliesForSchool(["2 ","3 ","4 ","25"])
