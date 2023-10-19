function carNumber (input){

    let startingNumber = Number(input[0]);
    let endingNumber = Number(input[1]);

    let printValue = "";
    for (let x1 = startingNumber+1; x1 <= endingNumber; x1++){

        for(let x2 = startingNumber; x2 <=endingNumber;x2++){

            for (let x3 = startingNumber; x3 <= endingNumber; x3++){

                for(let x4 = startingNumber; x4<= endingNumber; x4++){

                    let first = (x1 % 2 === 0 && x4 % 2 !== 0) || (x1 % 2 !== 0 && x4 % 2 === 0);
                    let second = (x2+x3) % 2 === 0;
                    let third = x1 > x4;

                    if (first && second && third){
                        printValue += `${x1}${x2}${x3}${x4} `
                    }
                }
            }
        }
    }
    console.log(printValue);

}
carNumber([2,3])

//6555! 6575! 6665! 6685! 6755! 6775! 6865! 6885! 7556! 7576! 7666! 7686! 7756! 7776! 7866! 7886! 8555 8557 8575 8577 8665 8667 8685 8687 8755 8757 8775 8777 8865 8867 8885 8887