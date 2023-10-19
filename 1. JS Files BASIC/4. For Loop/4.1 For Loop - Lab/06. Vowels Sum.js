function vowelsSum(input) {
    let text = input[0];
    let sum = 0;

    for (let i = 0; i < text.length; i++) {

        let symbol = text.charAt(i)
        switch (symbol) {
            case `a`: sum += 1;
                break;
            case `e`: sum += 2;
                break;
            case `i`: sum += 3;
                break;
            case `o`: sum += 4;
                break;
            case `u`: sum += 5;
        }

    }
    console.log(sum);
}

vowelsSum(["drago"])


/*Да се напише функция, която получава, изчислява и 
отпечатва сумата от стойностите на гласните букви според таблицата по-долу:

буква	    a	e	i	o	u
стойност	1	2	3	4	5
 */