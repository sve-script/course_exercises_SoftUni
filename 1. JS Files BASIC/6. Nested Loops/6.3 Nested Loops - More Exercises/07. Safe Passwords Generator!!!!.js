function safePasswordGen(input) {

    let n1 = Number(input[0]);
    let n2 = Number(input[1]);

    let maxGenPasswords = Number(input[2]);

    let printValue = "";

    let counterA = 35;
    let counterB = 64;
    let generatedPasswords = 0;
    flag = false;

    for (let x1 = 1; x1 <= n1; x1++){
        if(flag){
            break;
        }

        for (let x2 = 1; x2 <= n2; x2++){
            let buffer = "";
            let ValueA = String.fromCharCode(counterA);
            let ValueB = String.fromCharCode(counterB);

            buffer = `${ValueA}${ValueB}${x1}${x2}${ValueB}${ValueA}|`;
            printValue +=buffer;
            counterA++;
            counterB++;
            generatedPasswords++;

            if(counterA > 55){
                counterA = 35;
            }
            if(counterB > 96){
                counterB = 64;
            }


            if(generatedPasswords === maxGenPasswords){
                flag = true;
                break;
            }

        }
    }
    console.log(printValue);
}

safePasswordGen([2, 3, 10])