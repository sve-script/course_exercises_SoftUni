function smallShop(input) {
    let product = input[0];
    let town = input[1];
    let quantity = Number(input[2]);

    switch (town) {
        case `Sofia`:
            switch (product) {
                case `coffee`: console.log(quantity * 0.5); break;
                case `water`: console.log(quantity * 0.80); break;
                case `beer`: console.log(quantity * 1.20); break;
                case `sweets`: console.log(quantity * 1.45); break;
                default: console.log(quantity * 1.60); break;
            } break;
        case `Plovdiv`: 
            switch (product) {
                case `coffee`: console.log(quantity * 0.40); break;
                case `water`: console.log(quantity * 0.70); break;
                case `beer`: console.log(quantity * 1.15); break;
                case `sweets`: console.log(quantity * 1.30); break;
                default: console.log(quantity * 1.50); break;
            } break;
        case `Varna`:
            switch (product) {
                case `coffee`: console.log(quantity * 0.45); break;
                case `water`: console.log(quantity * 0.70); break;
                case `beer`: console.log(quantity * 1.10); break;
                case `sweets`: console.log(quantity * 1.35); break;
                default: console.log(quantity * 1.55); break;
            } break;

    }
}
smallShop([`sweets`, `Varna`, `2`])


/**Предприемчив българин отваря квартални магазинчета в няколко града и продава на различни цени според града:
град / продукт	coffee	water	beer	sweets	peanuts
Sofia	        0.50	0.80	1.20	1.45	1.60
Plovdiv	        0.40	0.70	1.15	1.30	1.50
Varna	        0.45	0.70	1.10	1.35	1.55
Напишете функция, която получава аргументи: продукт (низ), град (низ) и количество (число), и пресмята и отпечатва колко струва съответното количество от избрания продукт в посочения град. 
 */