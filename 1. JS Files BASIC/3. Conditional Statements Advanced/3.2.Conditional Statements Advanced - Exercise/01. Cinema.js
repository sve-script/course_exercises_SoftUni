function cinema(input) {
    let project = input[0];
    let r = Number(input[1]);
    let c = Number(input[2]);

    let seatedPlace = r * c

    let price = 0

    switch (project) {
        case `Premiere`:
            price = 12.00; break;
        case `Normal`:
            price = 7.50; break;
        case `Discount`:
            price = 5.00; break;
    }

    let totalPrice = seatedPlace * price
    console.log(`${totalPrice.toFixed(2)} leva`);

}
cinema(["Normal","21","13"])






/*В една кинозала столовете са наредени в правоъгълна форма в r реда и c колони. Има три вида прожекции с билети на различни цени:
•	Premiere – премиерна прожекция, на цена 12.00 лева.
•	Normal – стандартна прожекция, на цена 7.50 лева.
•	Discount – прожекция за деца, ученици и студенти на намалена цена от 5.00 лева.
Напишете функция, която приема тип прожекция (стринг), брой редове и брой колони в залата (цели числа) и изчислява общите приходи от билети при пълна зала. Резултатът да се отпечата във формат,
 като в примерите по-долу, с 2 знака след десетичната точка.  
 */