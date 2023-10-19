function fruitShop(input) {

    let type = input[0];
    let day = input[1];
    let quantity = Number(input[2]);


    switch (day) {
        case `Monday`:
        case `Tuesday`:
        case `Wednesday`:
        case `Thursday`:
        case `Friday`:
            switch (type) {
                case `banana`:
                    console.log((quantity * 2.50).toFixed(2));
                    break;

                case `apple`:
                    console.log((quantity * 1.20).toFixed(2));
                    break;

                case `orange`:
                    console.log((quantity * 0.85).toFixed(2));
                    break;

                case `grapefruit`:
                    console.log((quantity * 1.45).toFixed(2));
                    break;

                case `kiwi`:
                    console.log((quantity * 2.70).toFixed(2));
                    break;

                case `pineapple`:
                    console.log((quantity * 5.50).toFixed(2));
                    break;

                case `grapes`:
                    console.log((quantity * 3.85).toFixed(2));
                    break;

                default:
                    console.log(`error`);
            } break;
        case `Saturday`:
        case `Sunday`:
            switch (type) {
                case `banana`:
                    console.log((quantity * 2.70).toFixed(2));
                    break;
                case `apple`:
                    console.log((quantity * 1.25).toFixed(2));
                    break;
                case `orange`:
                    console.log((quantity * 0.90).toFixed(2));
                    break;
                case `grapefruit`:
                    console.log((quantity * 1.60).toFixed(2));
                    break;
                case `kiwi`:
                    console.log((quantity * 3.00).toFixed(2));
                    break;
                case `pineapple`:
                    console.log((quantity * 5.60).toFixed(2));
                    break;
                case `grapes`:
                    console.log((quantity * 4.20).toFixed(2));
                    break
                default:
                    console.log(`error`);
            } break;
        default:
            console.log(`error`);
    }

}

fruitShop(["tomato",
    "Monday",
    "0.5"])






/*Магазин за плодове през работните дни работи на следните цени:
плод	banana	apple	orange	grapefruit	kiwi	pineapple	grapes
цена	2.50	1.20	0.85	1.45	2.70	5.50	3.85
Събота и неделя магазинът работи на по-високи цени:
плод	banana	apple	orange	grapefruit	kiwi	pineapple	grapes
цена	2.70	1.25	0.90	1.60	3.00	5.60	4.20
Напишете функция, която получава аргументи:плод (banana / apple / orange / grapefruit / kiwi / pineapple / grapes),
 ден от седмицата (Monday / Tuesday / Wednesday / Thursday / Friday / Saturday / Sunday) и количество (число) 
 и пресмята цената според цените от таблиците по-горе. Резултатът да се отпечата закръглен
  с 2 цифри след десетичната точка. При невалиден ден от седмицата или невалидно име на плод да се отпечата "error". 
 */